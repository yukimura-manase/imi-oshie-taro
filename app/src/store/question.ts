import { proxy } from "valtio";

interface QuestionStateType {
  questionText: string;
}

export const questionStates = proxy<QuestionStateType>({
  // TODO: Test
  questionText: "ねこ",
  // questionText: "",
});

export const questionActions = {
  setQuestionText: (text: string) => {
    questionStates.questionText = text;
  },
};
