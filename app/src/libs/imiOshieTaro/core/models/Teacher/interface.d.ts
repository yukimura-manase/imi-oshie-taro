import type { Meaning } from "../../types/meaning";

export interface ITeacher<T extends Meaning> {
    explain(word: string): Promise<T>;
}
