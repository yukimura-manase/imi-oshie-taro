import { WordQuestionInterpreter } from "../models/impl/interpreter";
import WordMeaningService from "../services/impl/word-meaning"
import createChatGPT from "@imi-oshie-taro/openai";
import WordTeacher from "../models/impl/teacher";

const createWordMeaningService = () => {
    const gpt = createChatGPT()
    const interpreter = new WordQuestionInterpreter(gpt)
    const teacher = new WordTeacher(gpt)
    return new WordMeaningService(interpreter, teacher)
}

export default createWordMeaningService;
