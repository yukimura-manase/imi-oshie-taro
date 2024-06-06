import { OpenAI } from "@langchain/openai"
import { TemplateFactory } from "./templates"
import { ChatGPT } from "../chatGPT/impl/chatGPT"
import {  } from "openai"

const next_api_key = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY
const OPENAI_API_KEY = next_api_key ? next_api_key : process.env.OPEN_AI_API_KEY

// TODO: use DI and delete service factory
// NOTE: I tried but DI is difficult to implement in TS or JS
export const createChatGPT = () => {
    const openAI = new OpenAI({
        apiKey: OPENAI_API_KEY,
    })
    const factory = new TemplateFactory()
    return new ChatGPT(openAI, factory)
}
