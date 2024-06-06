import type { WordMeaning } from "../../types/meaning";

export interface IWordMeaningService {
    getMeaning(question: string): Promise<WordMeaning>
}
