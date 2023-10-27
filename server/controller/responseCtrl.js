const OpenAI = require("openai");

const openAi = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
})

const chatArray = [{ "role": "system", "content": "You are a helpful assistant." }];

const getChat = async (req, res) => {
    try {
        res.send(chatArray)
    } catch (error) {
        console.log(error.message)
    }
}
const textGenerator = async (req, res) => {
    try {
        const { message } = req.body

        // const messages = [
        //     { role: "system", content: `The user is interested in a topic related to "${message}". Please generate content that relates to this topic and maintains context accordingly.` },
        //     { role: "user", content: "Generate text that fits the context and topic." }
        // ];
        const response = await openAi.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: chatArray.concat([{ role: "user", content: message }]),
            max_tokens: 200,
            temperature: 0.7,
            n: 1
        })
        console.log(response.choices[0].message.content)
        chatArray.push({ role: "user", content: message });
        chatArray.push({ role: "assistant", content: response.choices[0].message.content });


        return res.json(chatArray)
    } catch (error) {
        console.log(error.message)
    }
}

const sentimentGenerator = async (req, res) => {
    try {
        const { text, language } = req.body
        const messages = [
            { role: "system", content: `Please classify the sentiment expressed in the following sentence as positive, neutral or negative. More information should be provided on the mood and tone etc and give your response in ${language} language under 200 characters` },
            { role: "user", content: text }
        ];
        const response = await openAi.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: messages,
            temperature: 0,
            max_tokens: 200,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })

        const output = response.choices[0].message.content
        console.log(output)
        return res.send({ output })
    } catch (error) {
        console.log(error.message)
    }
}
module.exports = { textGenerator, sentimentGenerator, getChat }