
import { OpenAI } from "@langchain/openai"

import { ChatTemplateFactory } from "../factories"
import { Explanation, ExtractedWord, IChatGPT } from "./interface"


export class ChatGPT implements IChatGPT {

    constructor(private openAI: OpenAI, private factory: ChatTemplateFactory) {
        this.openAI = openAI
        this.factory = factory
    }

    async extractWord(question: string): Promise<ExtractedWord> {
        const template = this.factory.createWordExtractionTemplate()
        const prompt = await template.invoke({ question })
        const content = await this.openAI.invoke(prompt)
        return extractedWordTextToObj(content)
    }

    async explain(word: string): Promise<Explanation> {
        const template = this.factory.createWordQuestionTemplate()
        const prompt = await template.invoke({ word })
        const content = await this.openAI.invoke(prompt)
        return createExplanation(word, content)
    }
}

const extractedWordTextToObj = (text:string): ExtractedWord => {
    const is_word_regex = /is_word_question: (.*)/
        const word_regex = /word: (.*)/

        const isWordStr = text.match(is_word_regex)
        const isWord = isWordStr?.[1].includes('Y')
        if (!isWord) return { value: "" }

        const word = text.match(word_regex)
        return { value: word ? word[1].trim() : "" }
}

const createExplanation = (word: string, content: string): Explanation => {
    return {
        askedWord: word,
        value: content
    }
}
