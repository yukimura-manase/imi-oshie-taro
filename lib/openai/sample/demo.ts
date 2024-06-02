import { ServiceFactory } from "../factories/service";

const service = ServiceFactory.createOpenAIService()

const extractWord = async () => {
    const response = await service.extractWord("時計は何ですか？")
    console.log(response)
}

const explainWord = async () => {
    const response = await service.askToExplain("時計")
    console.log(response)
}

const run = async () => {
    await extractWord()
    await explainWord()
}

if (require.main === module) {
    run()
}
