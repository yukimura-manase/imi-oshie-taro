import { OpenAI } from "@langchain/openai"
import { ChatTemplateFactory } from "./templates"
import { ChatGPT } from "../chatGPT/impl/chatGPT"

// TODO: use DI and delete service factory
// NOTE: I tried but DI is difficult to implement in TS or JS
export const createChatGPT = (apiKey: string): ChatGPT => {
    const openAI = new OpenAI({
        apiKey: apiKey
    })
    const factory = new ChatTemplateFactory()
    return new ChatGPT(openAI, factory)
}
