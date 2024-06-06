import { PromptTemplate } from "@langchain/core/prompts";


export class ChatTemplateFactory {
    createWordExtractionTemplate() {
        return PromptTemplate.fromTemplate(wordExtractionTemplateText);
    }

    createWordQuestionTemplate() {
        return PromptTemplate.fromTemplate(wordQuestionTemplateText);
    }
}


const wordExtractionTemplateText = `
    {question}

    上記の文が、言葉の意味を尋ねているかどうかを判断してください。
    もし、言葉に関する質問だと判断したらYes、そうでない場合はしっかりとNoと答えてください。
    また、Yesの場合は、質問の対象となる単語を教えてください。Noの場合は、空白のままにしてください。
    
    期待する回答形式:
    is_word_question: Yes/No
    word: 尋ねられた単語
    `;


const wordQuestionTemplateText = `
    {word}という言葉の意味について、小さな子供にも理解できるように説明してください。
    また、子供が理解しやすいような優しい話し言葉を使ってください。
    `;

