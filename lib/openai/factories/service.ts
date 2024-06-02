import { OpenAI } from "@langchain/openai"
import { TemplateFactory } from "./templates"
import { OpenAIService } from "../services/impl/openai"


// TODO: use DI and delete service factory
// NOTE: I tried but DI is difficult to implement in TS or JS
export class ServiceFactory {
    static createOpenAIService() {
        const openAI = new OpenAI()
        const factory = new TemplateFactory()
        return new OpenAIService(openAI, factory)
    }
}
