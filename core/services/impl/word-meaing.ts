import IInterpreter from "../../models/interfaces/interpreter"
import ITeacher from "../../models/interfaces/teacher"
import { WordMeaning } from "../../types/explanations"
import { WordQuestionInterpretation } from "../../types/interpretation"

class WordMeaningService {
    constructor(private interpreter: IInterpreter<WordQuestionInterpretation>, private teacher: ITeacher<WordMeaning>) {}

    async getMeaning(question: string): Promise<WordMeaning> {
        const interpretation = await this.interpreter.interpret(question)
        return this.teacher.explain(interpretation.askedWord)
    }
}

export default WordMeaningService;
