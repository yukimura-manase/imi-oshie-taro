
import { OpenAI } from "@langchain/openai"

import { OpenAIServiceInterface, Explanation, ExtractedWord } from "../interfaces/openai"
import { TemplateFactory } from "../../factories/templates"


export class OpenAIService implements OpenAIServiceInterface {

    constructor(private openAI: OpenAI, private factory: TemplateFactory) {
        this.openAI = openAI
        this.factory = factory
    }

    async extractWord(question: string): Promise<ExtractedWord> {
        const template = this.factory.createWordExtractionTemplate()
        const prompt = await template.invoke({ question })
        const content = await this.openAI.invoke(prompt)
        return Formatter.extractedWordTextToObj(content)
    }

    async askToExplain(word: string): Promise<Explanation> {
        const template = this.factory.createWordQuestionTemplate()
        const prompt = await template.invoke({ word })
        const content = await this.openAI.invoke(prompt)
        return Formatter.formatExplanation(word, content)
    }
}

class Formatter {
    static extractedWordTextToObj(text: string): ExtractedWord {
        const is_word_regex = /is_word_question: (.*)/
        const word_regex = /word: (.*)/

        const isWordStr = text.match(is_word_regex)
        const isWord = isWordStr?.[1].includes('Y') ? true : false
        const word = text.match(word_regex)

        return {
            isWord: isWord,
            value: word ? word[1].trim() : null
        }
    }

    static formatExplanation(word: string, content: string): Explanation {
        return {
            askedWord: word,
            value: content
        }
    }
}
