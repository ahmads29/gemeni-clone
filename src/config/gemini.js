// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold
// } from "@google/generative-ai";

// // Replace this with your API Key from Google AI Studio
// const API_KEY = "AIzaSyBCuOA-QOybPhBSm8jC4-WxOwqrY0qW7HY";
// const MODEL_NAME = "gemini-1.0-pro";

// async function runChat(prompt) {
//     const genAI = new GoogleGenerativeAI(API_KEY);

//     const model = genAI.getGenerativeModel({
//         model: MODEL_NAME,
//         safetySettings: [{
//                 category: HarmCategory.HARM_CATEGORY_DEROGATORY,
//                 threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//             },
//             {
//                 category: HarmCategory.HARM_CATEGORY_VIOLENCE,
//                 threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//             },
//             {
//                 category: HarmCategory.HARM_CATEGORY_SEXUAL,
//                 threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//             },
//             {
//                 category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//                 threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//             },
//         ],
//         generationConfig: {
//             temperature: 0.9,
//             topK: 1,
//             topP: 1,
//             maxOutputTokens: 2048,
//         },
//     });

//     // const prompt = "Tell me an interesting fact about the universe.";

//     const result = await model.generateContent({
//         contents: [{
//             parts: [{
//                 text: prompt
//             }]
//         }],
//     });

//     const response = result.response;
//     console.log("Response:", response.text());
// }

// export default runChat;

// import {
//     GoogleGenerativeAI,
//     HarmCategory,
//     HarmBlockThreshold
// } from "@google/generative-ai";

// // Replace this with your API Key from Google AI Studio
// const API_KEY = "AIzaSyAow8473MM-6KVmDTAt4NxJMKDHiNajEBM";
// const MODEL_NAME = "gemini-1.0-pro";

// async function runChat(prompt) {
//     const genAI = new GoogleGenerativeAI(API_KEY);

//     const model = genAI.getGenerativeModel({
//         model: MODEL_NAME,
//         safetySettings: [{
//                 category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
//                 threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//             },
//             {
//                 category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
//                 threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//             },
//             {
//                 category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
//                 threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//             },
//             {
//                 category: HarmCategory.HARM_CATEGORY_HARASSMENT,
//                 threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//             },
//             {
//                 category: HarmCategory.HARM_CATEGORY_CIVIC_INTEGRITY,
//                 threshold: HarmBlockThreshold.BLOCK_LOW_AND_ABOVE,
//             },
//         ],
//         generationConfig: {
//             temperature: 0.9,
//             topK: 1,
//             topP: 1,
//             maxOutputTokens: 2048,
//         },
//     });

//     const result = await model.generateContent({
//         contents: [{
//             parts: [{
//                 text: prompt
//             }]
//         }],
//     });

//     const response = result.response;
//     console.log("Response:", response.text());
// }

// export default runChat;


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