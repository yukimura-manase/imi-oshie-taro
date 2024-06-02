import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

// OpenAIのAPIキーを設定します
const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;
// console.log("API Key:", apiKey);

const chatModel = new ChatOpenAI({
  apiKey,
});

// export async function testChat() {
//   console.log("testChat Call");
//   const response = await chatModel.invoke("what is LangSmith?");
//   console.log(response);
// }

const prompt = ChatPromptTemplate.fromMessages([
  // GPTのペルソナ設定
  [
    "system",
    "あなたは、子供にもわかりやすく、単語の意味をストーリーで教える先生です。",
  ],
  // ユーザーの入力
  ["user", "{input}"],
]);

// const chain = prompt.pipe(chatModel);

// export async function testChatChain() {
//   console.log("testChatChain Call");
//   const response = await chain.invoke({
//     input: "東京タワーはどこにありますか？",
//   });
//   console.log(response);
// }

const outputParser = new StringOutputParser();

const llmChain = prompt.pipe(chatModel).pipe(outputParser);

// outputParser を使って Responseから、回答のみを取り出す
export async function ChatChainLLM(query: string) {
  const response = await llmChain.invoke({
    input: query,
  });
  console.log(response);
}
