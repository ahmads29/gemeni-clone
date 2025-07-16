import {
    GoogleGenAI
} from "@google/genai";

const API_KEY = "AIzaSyAow8473MM-6KVmDTAt4NxJMKDHiNajEBM";

const ai = new GoogleGenAI({
    apiKey: API_KEY
});

async function runChat(prompt) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: [{
                text: prompt
            }],
            // You can add generationConfig if supported here, e.g. temperature, maxOutputTokens
            // generationConfig: { temperature: 0.9, maxOutputTokens: 2048 },
        });
        console.log("Response:", response.text);
        return response.text;
    } catch (error) {
        console.error("Error generating content:", error);
        throw error;
    }
}

// Example usage:
export default runChat;
