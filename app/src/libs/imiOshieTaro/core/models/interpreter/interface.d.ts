import type { Interpretation } from "../../types/interpretation";

export interface IInterpreter<T extends Interpretation> {
    interpret(question: string): Promise<T>;
}
