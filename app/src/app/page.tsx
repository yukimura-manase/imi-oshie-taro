"use client";
import { testChatChainLLM } from "../libs/test";
import { generateImageByOpenAiDalle } from "../libs/openAiDalle";

export default function Home() {
  console.log("Hello, World!");

  // testChatChainLLM();
  // generateImageByOpenAiDalle("かわいい白黒なねこ");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>意味教え太郎</h1>
    </main>
  );
}
