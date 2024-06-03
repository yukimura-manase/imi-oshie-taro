import { Interpretation } from "../../types/interpretation";



interface IInterpreter<T extends Interpretation> {
    interpret(question: string): Promise<T>;
}

export default IInterpreter;
