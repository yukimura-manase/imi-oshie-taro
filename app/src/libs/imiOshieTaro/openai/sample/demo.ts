import { createChatGPT } from "../factories/chatGPT";

const chatGPT = createChatGPT("");

const extractWord = async () => {
  const response = await chatGPT.extractWord("こんにちは、元気ですか？");
  console.log(response);
};

const explainWord = async () => {
  const response = await chatGPT.explain("時計");
  console.log(response);
};

const run = async () => {
  await extractWord();
  await explainWord();
};

if (require.main === module) {
  run();
}
