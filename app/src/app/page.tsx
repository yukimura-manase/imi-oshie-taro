"use client";
import { ChatChainLLM } from "../libs/openAiLangChain";
import { generateImageByOpenAiDalle } from "../libs/openAiDalle";
import { synthesizeSpeech } from "@/libs/voiceVoxClient";

export default function Home() {
  console.log("Hello, World!");

  ChatChainLLM("LangChainの便利な使い方を教えてください");
  // generateImageByOpenAiDalle("かわいい白黒なねこ");

  // 使用例
  synthesizeSpeech("こんにちは、VOICEVOXです。").then((audioBlob) => {
    // const url = URL.createObjectURL(audioBlob);
    // const audio = new Audio(url);
    // audio.play();
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>意味教え太郎</h1>
    </main>
  );
}
