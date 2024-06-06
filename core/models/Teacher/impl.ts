import { ChatGPT } from "@imi-oshie-taro/openai/chatGPT/impl/chatGPT";
import type { ITeacher } from "./interface";
import type { WordMeaning } from "../../types/meaning";
import { NotAskedWordQuestion } from "../../exceptions";


export class WordTeacher implements ITeacher<WordMeaning> {
    constructor(private gpt: ChatGPT) {}

    async explain(word: string): Promise<WordMeaning> {
        if (!word) {
            throw new NotAskedWordQuestion()
        }
        console.log('word', word)
        const explanation = await this.gpt.explain(word)
        return { word: explanation.askedWord, value: explanation.value }
    }
}
