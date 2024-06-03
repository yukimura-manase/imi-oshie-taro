import { OpenAI } from "@langchain/openai"
import { TemplateFactory } from "./templates"
import { ChatGPT } from "../chatGPT/impl/chatGPT"


// TODO: use DI and delete service factory
// NOTE: I tried but DI is difficult to implement in TS or JS
export const createChatGPT = () => {
    const openAI = new OpenAI()
    const factory = new TemplateFactory()
    return new ChatGPT(openAI, factory)
}
