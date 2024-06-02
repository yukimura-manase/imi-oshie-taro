import NotAskedWordQuestion from "../exceptions/not-asked-word-question"
import WordExplainerInterface from "../interfaces/word-explainer"
import WordExplanation from "../types/word-explanation"

class WordExplainService {
    private teacher: WordExplainerInterface
    __constructor(teacher: WordExplainerInterface) {
        this.teacher = teacher
    }

    async explain(question: string): Promise<WordExplanation> {
        if (question === "") throw new Error("Empty Question")

        const understanding = await this.teacher.understand(question)
        if (!understanding.hasAskedWordQuestion) throw new NotAskedWordQuestion()

        return await this.teacher.explain(understanding.askedWord)
    }
}

export default WordExplainService
