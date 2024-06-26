export type ExtractedWord = {
    value: string;
}

export type Explanation = {
    value: string;
    askedWord: string;
}

export interface IChatGPT {
    extractWord(question: string): Promise<ExtractedWord>;
    explain(word: string): Promise<Explanation>
}

