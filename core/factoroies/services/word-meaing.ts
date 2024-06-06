import createChatGPT from "@imi-oshie-taro/openai"
import { WordQuestionInterpreter } from "../../models/interpreter/impl"
import { WordTeacher } from "../../models"
import { WordMeaningService } from "../../services"


export const createWordMeaningService = () => {
    const gpt = createChatGPT()
    const interpreter = new WordQuestionInterpreter(gpt)
    const teacher = new WordTeacher(gpt)
    return new WordMeaningService(interpreter, teacher)
}
