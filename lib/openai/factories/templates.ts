import { PromptTemplate } from "@langchain/core/prompts";


export class TemplateFactory {
    createWordExtractionTemplate() {
        return PromptTemplate.fromTemplate(wordExtractionTemplateText);
    }

    createWordQuestionTemplate() {
        return PromptTemplate.fromTemplate(wordQuestionTemplateText);
    }
}


const wordExtractionTemplateText = `
    {question}

    上記の質問は、言葉の意味についての質問ですか？
    もし、言葉に関する質問ではないと判断したら、Noと答えてください。
    また、質問された言葉を単語の形式で教えてください
    
    期待する回答形式:
    is_word_question: Yes/No
    word: 質問の対象の単語
    `;


const wordQuestionTemplateText = `
    {word}という言葉の意味について、小さな子供にも理解できるように説明してください。
    また、子供が理解しやすいような優しい話し言葉を使ってください。
    `;

