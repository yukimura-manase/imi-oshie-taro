import { ChatGPT } from "@imi-oshie-taro/openai/chatGPT/impl/chatGPT";
import type ITeacher from "../interfaces/teacher";
import type { WordMeaning } from "../../types/explanations";
import NotAskedWordQuestion from "../../exceptions/not-asked-word-question";


class WordTeacher implements ITeacher<WordMeaning> {
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

export default WordTeacher;
