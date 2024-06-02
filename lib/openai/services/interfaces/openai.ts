export type ExtractedWord = {
    value: string | null;
    isWord: boolean;
}

export type Explanation = {
    value: any;
    askedWord: string;
}

export interface OpenAIServiceInterface {
    extractWord(question: string): Promise<ExtractedWord>;
    askToExplain(word: string): Promise<Explanation>
}

