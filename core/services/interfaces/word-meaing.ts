import type { WordMeaning } from "../../types/explanations";

export interface IWordMeaningService {
    getMeaning(question: string): Promise<WordMeaning>
}
