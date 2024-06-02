export type ExtractedWord = {
    value: string | null;
    isWord: boolean;
}

export type Explanation = {
    value: string;
    askedWord: string;
}

export interface OpenAIServiceInterface {
    extractWord(question: string): Promise<ExtractedWord>;
    askToExplain(word: string): Promise<Explanation>
}

