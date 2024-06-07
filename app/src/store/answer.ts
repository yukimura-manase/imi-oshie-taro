import { proxy } from "valtio";

interface AnswerStateType {
  answerText: string;
}

export const answerStates = proxy<AnswerStateType>({
  // TODO: Test
  answerText: "ねこは、もふもふしていて、耳が2つある可愛い生き物です",
  // answerText: "",
});

export const answerActions = {
  setAnswerText: (text: string) => {
    answerStates.answerText = text;
  },
};
