import WordExplainerInterface from "../interfaces/word-explainer";
import Understanding from "../types/understanding";
import WordExplanation from "../types/word-explanation";

class Teacher implements WordExplainerInterface {
    explain(word: string): Promise<WordExplanation> {
        // TODO: Implement
        throw new Error("Method not implemented.");
    }

    understand(question: string): Promise<Understanding> {
        // TODO: Implement
        throw new Error("Method not implemented.");
    }
}

export default Teacher;