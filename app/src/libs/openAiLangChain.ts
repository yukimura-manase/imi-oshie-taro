import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

// OpenAIのAPIキーを設定します
const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;
// console.log("API Key:", apiKey);

const chatModel = new ChatOpenAI({
  apiKey,
});

export const prompt = ChatPromptTemplate.fromMessages([
  // GPTのペルソナ設定
  [
    "system",
    "あなたは、子供にもわかりやすく、単語の意味をストーリーで教える先生です。",
  ],
  // ユーザーの入力
  ["user", "{input}"],
]);

const outputParser = new StringOutputParser();

const llmChain = prompt.pipe(chatModel).pipe(outputParser);

// 3. outputParser を使って Responseから、回答のみを取り出すパターン
export async function ChatChainLLM(query: string) {
  const resText = await llmChain.invoke({
    input: query,
  });
  console.log(resText);
  return resText;
}
