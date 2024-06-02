import axios from "axios";

export async function synthesizeSpeech(text: string) {
  // 音声合成の Query 作成をリクエストする
  const response = await axios.post(
    "http://localhost:50021/audio_query",
    null,
    {
      params: {
        text: text,
        speaker: 1,
      },
      headers: {
        accept: "application/json",
      },
    }
  );
  console.log("response", response);
  const audioQuery = response.data;
  console.log("audioQuery", audioQuery);

  // 音声合成をリクエストする
  const synthesisResponse = await axios.post(
    "http://localhost:50021/synthesis?speaker=1&enable_interrogative_upspeak=true",
    audioQuery,
    {
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "arraybuffer",
    }
  );
  console.log("synthesisResponse", synthesisResponse);

  return new Blob([synthesisResponse.data], { type: "audio/wav" });
}
