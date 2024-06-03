import { ChatGPT } from "@imi-oshie-taro/openai/chatGPT/impl/chatGPT";
import IInterpreter from "../interfaces/interpreter";
import { WordQuestionInterpretation } from "../../types/interpretation";


export class WordQuestionInterpreter implements IInterpreter<WordQuestionInterpretation> {
    constructor(private gpt: ChatGPT) {}

    async interpret(question: string): Promise<WordQuestionInterpretation> {
        const word = await this.gpt.extractWord(question)
        return { askedWord: word?.value ?? "" }
    }
  
}


