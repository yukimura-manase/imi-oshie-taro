"use client";
import { testChatChainLLM } from "../libs/test";

export default function Home() {
  console.log("Hello, World!");

  // testChatChainLLM();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>意味教え太郎</h1>
    </main>
  );
}
