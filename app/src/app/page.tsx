"use client";
// import { ChatChainLLM } from "../libs/openAiLangChain";
// import { generateImageByOpenAiDalle } from "../libs/openAiDalle";
import { synthesizeSpeech } from "@/libs/voiceVoxClient";
import { useState, useEffect } from "react";
import { Loading } from "@/components/shared/ui-elements/loading/Loading";

export default function Home() {
  console.log("Hello, World!");

  // ChatChainLLM("VOICEVOXとは、何ですか？");
  // generateImageByOpenAiDalle("かわいい白黒なねこ");

  const [audioData, setAudioData] = useState<Blob>();
  const [audioUrl, setAudioUrl] = useState<string>("");

  useEffect(() => {
    // 使用例
    synthesizeSpeech("こんにちは、VOICEVOXです。").then((audioBlob: Blob) => {
      console.log("audioBlob", audioBlob);
      setAudioData(audioBlob);
      const url = URL.createObjectURL(audioBlob);
      setAudioUrl(url);
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>意味教え太郎</h1>
      <p>意味の説明, 画像生成, 音声合成を行います</p>
      <h2>返却された音声ファイルを再生</h2>
      <div>{/* <Loading /> */}</div>
      <div>
        <audio controls src={audioUrl ? audioUrl : undefined} />
      </div>
    </main>
  );
}
