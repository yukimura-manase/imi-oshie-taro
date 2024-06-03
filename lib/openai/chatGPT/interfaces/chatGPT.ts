export type ExtractedWord = {
    value: string | null;
    isWord: boolean;
}

export type Explanation = {
    value: string;
    askedWord: string;
}

export interface ChatGPTInterface {
    extractWord(question: string): Promise<ExtractedWord>;
    explain(word: string): Promise<Explanation>
}

