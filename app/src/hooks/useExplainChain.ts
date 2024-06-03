import { useState } from "react";

import { generateImageByOpenAiDalle } from "@/libs/openAiDalle";
import { synthesizeSpeech } from "@/libs/voiceVoxClient";

/**
 * 画像生成, 音声生成の Custom Hook
 *
 * 1. User からの質問を受けて、回答を生成する (文章生成)
 * 2. 生成された文章を元に、他の Data を生成する
 *    - 画像を生成する (画像生成)
 *    - 音声を生成する (音声生成)
 */
export const useExplainChain = () => {
  const [image, setImage] = useState<string | null>(null);
  const generateImage = async (prompt: string) => {
    try {
      const response = await generateImageByOpenAiDalle(prompt);
      setImage(response);
    } catch (error) {
      console.error("Error generating image", error);
    }
  };

  const [audioData, setAudioData] = useState<Blob | undefined>(undefined);
  const generateAudio = async (prompt: string) => {
    try {
      const response = await synthesizeSpeech(prompt);
      setAudioData(response);
    } catch (error) {
      console.error("Error generating audio", error);
    }
  };

  const generateAll = async (prompt: string) => {
    await Promise.all([generateImage(prompt), generateAudio(prompt)]);
  };

  return {
    image,
    audioData,
    generateImage,
    generateAudio,
    generateAll,
  };
};
