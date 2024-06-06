import type { IInterpreter } from "../../models"
import type { ITeacher } from "../../models"
import type { WordMeaning } from "../../types/meaning"
import type { WordQuestionInterpretation } from "../../types/interpretation"
import { IWordMeaningService } from "./interface"

export class WordMeaningService implements IWordMeaningService {
    constructor(private interpreter: IInterpreter<WordQuestionInterpretation>, private teacher: ITeacher<WordMeaning>) {}

    async getMeaning(question: string): Promise<WordMeaning> {
        const interpretation = await this.interpreter.interpret(question)
        return this.teacher.explain(interpretation.askedWord)
    }
}
