import { OpenAI } from "langchain";
import axios from "axios";

// OpenAIのAPIキーを設定します
const apiKey = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;
console.log("API Key:", apiKey);

// OpenAIの画像生成エンドポイント
const openAiImageEndpoint: string =
  "https://api.openai.com/v1/images/generations";

// LangChain.jsの初期化
const openai: OpenAI = new OpenAI(apiKey);

// 画像生成リクエストを送信する関数
async function generateImage(prompt: string): Promise<string> {
  try {
    const response = await axios.post(
      openAiImageEndpoint,
      {
        prompt: prompt,
        n: 1,
        size: "1024x1024",
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data && response.data.data && response.data.data.length > 0) {
      return response.data.data[0].url;
    } else {
      throw new Error("画像生成に失敗しました。");
    }
  } catch (error) {
    console.error("Error generating image:", error);
    throw error;
  }
}

// プロンプトを指定して画像を生成
const prompt: string = "A fantasy landscape with mountains and a river";
generateImage(prompt)
  .then((url: string) => {
    console.log("Generated image URL:", url);
  })
  .catch((error: Error) => {
    console.error("Error:", error);
  });
