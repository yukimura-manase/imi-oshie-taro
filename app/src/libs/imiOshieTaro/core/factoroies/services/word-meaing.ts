import createChatGPT from "@/libs/imiOshieTaro/openai";
// app/src/libs/imiOshieTaro/openai/index.ts
import { WordQuestionInterpreter } from "../../models/interpreter/impl";
import { WordTeacher } from "../../models";
import { WordMeaningService } from "../../services";

export const createWordMeaningService = (
  apiKey: string
): WordMeaningService => {
  const gpt = createChatGPT(apiKey);
  const interpreter = new WordQuestionInterpreter(gpt);
  const teacher = new WordTeacher(gpt);
  return new WordMeaningService(interpreter, teacher);
};
