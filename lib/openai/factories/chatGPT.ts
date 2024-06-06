import { OpenAI } from "@langchain/openai"
import { ChatTemplateFactory } from "./chat-templates"
import { ChatGPT } from "../chatGPT/impl"

// TODO: use DI and delete service factory
// NOTE: I tried but DI is difficult to implement in TS or JS
export const createChatGPT = () => {
    const openAI = new OpenAI()
    const factory = new ChatTemplateFactory()
    return new ChatGPT(openAI, factory)
}
