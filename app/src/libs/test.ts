import { ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";

// OpenAIのAPIキーを設定します
const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;
console.log("API Key:", apiKey);

const chatModel = new ChatOpenAI({
  apiKey,
});

export async function testChat() {
  console.log("testChat Call");
  const response = await chatModel.invoke("what is LangSmith?");
  console.log(response);
}

const prompt = ChatPromptTemplate.fromMessages([
  ["system", "あなたは、プロの旅先案内人です。日本語で回答します"],
  ["user", "{input}"],
]);

const chain = prompt.pipe(chatModel);

export async function testChatChain() {
  console.log("testChatChain Call");
  const response = await chain.invoke({
    input: "東京タワーはどこにありますか？",
  });
  console.log(response);
}

const outputParser = new StringOutputParser();

const llmChain = prompt.pipe(chatModel).pipe(outputParser);

// Responseから、回答のみを取り出す
export async function testChatChainLLM() {
  console.log("testChatChainLLM Call");
  const response = await llmChain.invoke({
    input: "東京スカイツリーはどこにありますか？",
  });
  console.log(response);
}
