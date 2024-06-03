import type IInterpreter from "../../models/interfaces/interpreter"
import type ITeacher from "../../models/interfaces/teacher"
import type { WordMeaning } from "../../types/explanations"
import type { WordQuestionInterpretation } from "../../types/interpretation"

class WordMeaningService {
    constructor(private interpreter: IInterpreter<WordQuestionInterpretation>, private teacher: ITeacher<WordMeaning>) {}

    async getMeaning(question: string): Promise<WordMeaning> {
        const interpretation = await this.interpreter.interpret(question)
        return this.teacher.explain(interpretation.askedWord)
    }
}

export default WordMeaningService;
