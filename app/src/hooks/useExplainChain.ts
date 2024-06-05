import { useEffect, useState } from "react";

import { generateImageByOpenAiDalle } from "@/libs/openAiDalle";
import { synthesizeSpeech } from "@/libs/voiceVoxClient";
import { ChatChainLLM } from "@/libs/openAiLangChain";

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
  const [text, setText] = useState<string>("");
  const generateDescription = async (text: string) => {
    try {
      // TODO: ここで 意味教え太郎の文章生成を実行する
      const resText = await ChatChainLLM(text);
      setText(resText);

      // TODO: ここで、画像生成用のプロンプトを Set する
      // 画像生成するために、最適化された文章出ないと、画像生成が上手くいかない (API Error が発生する)
      setImagePrompt(resText);
    } catch (error) {
      console.error("Error generating description", error);
    }
  };

  // 画像生成用のプロンプト: 画像生成するために、最適化された文章
  // 画像生成するために、最適化された文章出ないと、画像生成が上手くいかない (API Error が発生する)
  const [imagePrompt, setImagePrompt] = useState<string>("");
  // 生成された画像
  const [image, setImage] = useState<string | null>(null);

  // 画像を生成する (画像生成)
  const generateImage = async (prompt: string) => {
    try {
      // const response = await generateImageByOpenAiDalle(prompt);
      // TODO: Test
      const response = await generateImageByOpenAiDalle("可愛い白黒なねこ");
      setImage(response);
    } catch (error) {
      console.error("Error generating image", error);
    }
  };

  // 音声生成用のプロンプト: 音声生成するために、最適化された文章
  const [audioPrompt, setAudioPrompt] = useState<string>("");
  // 音声ファイル Blob, URL
  const [audioData, setAudioData] = useState<Blob | undefined>(undefined);
  const [audioUrl, setAudioUrl] = useState<string>("");

  // 音声を生成する (音声生成)
  const generateAudio = async (prompt: string) => {
    try {
      const test =
        "猫は、かわいらしい動物で、しっぽがフワフワしていて、小さな肉球がとってもかわいい生き物ですよ。";

      // TODO: Test
      const audioBlob = await synthesizeSpeech(test);
      setAudioData(audioBlob);
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    } catch (error) {
      console.error("Error generating audio", error);
    }
  };

  const testGenerateAudio = async () => {
    // 使用例
    synthesizeSpeech("こんにちは、VOICEVOXです。").then((audioBlob: Blob) => {
      console.log("audioBlob", audioBlob);
      setAudioData(audioBlob);
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    });
  };

  // 画像生成, 音声生成は、並列・非同期で実行
  const generateAll = async (prompt: string) => {
    setIsLoading(true);
    await Promise.all([generateImage(prompt), generateAudio(prompt)]);

    // TODO: Test
    // await Promise.all([generateImage(prompt), testGenerateAudio()]);
    setIsLoading(false);
  };

  // 初回レンダリング時に、まずは文章生成を実行する
  // 文章生成が終わったら、画像生成, 音声生成を実行する
  useEffect(() => {
    generateDescription(transcript).then(() => {
      generateAll(text);
    });
  }, []);

  return {
    isLoading,
    text,
    image,
    audioData,
    audioUrl,
    setText,
    generateImage,
    generateAudio,
    generateAll,
  };
};
