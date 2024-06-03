import { proxy } from "valtio";

interface AnswerStateType {
  answerText: string;
}

export const answerStates = proxy<AnswerStateType>({
  answerText: "",
});

export const answerActions = {
  setAnswerText: (text: string) => {
    answerStates.answerText = text;
  },
};
