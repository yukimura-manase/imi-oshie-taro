import Understanding from "../types/understanding";
import WordExplanation from "../types/word-explanation";

interface WordExplainerInterface {
    understand(question: string): Promise<Understanding>;
    explain(word: string): Promise<WordExplanation>;
}

export default WordExplainerInterface;
