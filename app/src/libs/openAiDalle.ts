import { DallEAPIWrapper } from "@langchain/openai";

// OpenAIのAPIキーを設定します
const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY ?? "";
console.log("API Key:", apiKey);

const dallE = new DallEAPIWrapper({
  apiKey,
  modelName: "dall-e-3",
});

export async function generateImageByOpenAiDalle(
  prompt: string
): Promise<string | null> {
  try {
    const response = await dallE._call(prompt);
    console.log("Generated image URL:", response);
    return response;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
}
