import { useEffect, useState } from "react";

import { generateImageByOpenAiDalle } from "@/libs/openAiDalle";
import { synthesizeSpeech } from "@/libs/voiceVoxClient";

import createWordMeaningService from "@/libs/imiOshieTaro/core";

/**
 * 画像生成, 音声生成の Custom Hook
 *
 * 1. User からの質問を受けて、回答を生成する (文章生成)
 * 2. 生成された文章を元に、他の Data を生成する
 *    - 画像を生成する (画像生成)
 *    - 音声を生成する (音声生成)
 */
export const useExplainChain = (transcript: string) => {
  // ローディング中かどうか (画像生成, 音声生成が終わるまでの間、ローディング)
  // Default: true
  const [isLoading, setIsLoading] = useState(true);

  // User からの質問を受けて、回答を生成する (文章生成)
  // word: 単語, description: 単語の説明
  const [word, setWord] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const generateDescription = async (text: string) => {
    console.log("generateDescription", text);
    console.log(
      "process.env.NEXT_PUBLIC_OPEN_AI_API_KEY",
      process.env.NEXT_PUBLIC_OPEN_AI_API_KEY
    );

    try {
      const service = createWordMeaningService(
        process.env.NEXT_PUBLIC_OPEN_AI_API_KEY ?? ""
      );
      const meaning = await service.getMeaning(text);
      setWord(meaning.word);
      setDescription(meaning.value);
      return meaning;
    } catch (error) {
      console.error("Error generating description", error);
    }
  };

  // 生成された画像
  const [image, setImage] = useState<string | null>(null);

  // 画像を生成する (画像生成)
  const generateImage = async (word: string) => {
    try {
      // ここで、画像生成用のプロンプトを作成する
      // 画像生成するために、最適化された文章出ないと、画像生成が上手くいかない (API Error が発生する)
      const prompt = `${word}の画像を生成してください。`;
      const response = await generateImageByOpenAiDalle(prompt);
      setImage(response);
    } catch (error) {
      console.error("Error generating image", error);
    }
  };

  // 音声ファイル Blob, URL
  const [audioData, setAudioData] = useState<Blob | undefined>(undefined);
  const [audioUrl, setAudioUrl] = useState<string>("");

  // 音声を生成する (音声生成)
  const generateAudio = async (description: string) => {
    try {
      const audioBlob = await synthesizeSpeech(description);
      setAudioData(audioBlob);
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } catch (error) {
      console.error("Error generating audio", error);
    }
  };

  // 画像生成, 音声生成は、並列・非同期で実行
  const generateAll = async (word: string, description: string) => {
    setIsLoading(true);
    await Promise.all([generateImage(word), generateAudio(description)]);
    setIsLoading(false);
  };
  // 初回レンダリング時に、まずは文章生成を実行する
  // 文章生成が終わったら、画像生成, 音声生成を実行する
  useEffect(() => {
    generateDescription(transcript).then((meaning) => {
      console.log("meaning", meaning);
      meaning && generateAll(meaning.word, meaning.value);
    });
  }, []);

  return {
    isLoading,
    word,
    description,
    image,
    audioData,
    audioUrl,
    setWord,
    generateImage,
    generateAudio,
    generateAll,
  };
};
