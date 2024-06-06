import { ChatGPT } from "@imi-oshie-taro/openai/chatGPT/impl/chatGPT";
import type { IInterpreter } from "./interface";
import type { WordQuestionInterpretation } from "../../types/interpretation";


export class WordQuestionInterpreter implements IInterpreter<WordQuestionInterpretation> {
    constructor(private gpt: ChatGPT) {}

    async interpret(question: string): Promise<WordQuestionInterpretation> {
        const word = await this.gpt.extractWord(question)
        return { askedWord: word?.value ?? "" }
    }
  
}


