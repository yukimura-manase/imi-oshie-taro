import axios from "axios";

export async function synthesizeSpeech(text: string) {
  const response = axios.post("http://localhost:50021/audio_query", null, {
    params: {
      text: text,
      speaker: 1,
    },
    headers: {
      accept: "application/json",
    },
  });
  console.log("response", response);
  // const audioQuery = response.data;
  // const synthesisResponse = await axios.post(
  //   "http://localhost:50021/synthesis",
  //   audioQuery,
  //   {
  //     responseType: "arraybuffer",
  //   }
  // );

  // return new Blob([synthesisResponse.data], { type: "audio/wav" });
}
