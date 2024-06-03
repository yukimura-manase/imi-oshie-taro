import type { Meaning } from "../../types/explanations";

interface ITeacher<T extends Meaning> {
    explain(word: string): Promise<T>;
}

export default ITeacher;
