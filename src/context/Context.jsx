import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]); // [{ prompt: string, response: string }]
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout( function() {
            setResultData(prev => prev + nextWord);
        },75*index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult();
    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let response;
        let usedPrompt;
        if (prompt !== undefined){
            response = await runChat(prompt);
            setRecentPrompt(prompt);
            usedPrompt = prompt;
        } else {
            setRecentPrompt(input);
            response = await runChat(input);
            usedPrompt = input;
        }
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++){
            if (i === 0 || i%2 !== 1) {
                newResponse += responseArray[i];
            }
            else{
                newResponse += "<b>"+responseArray[i]+"</b>";
            }
        }
        let newResponse2 = newResponse.split("*").join("</br>")
        let newResponseArray = newResponse2.split(" ");
        for(let i = 0; i < newResponseArray.length; i++){
            const nextWord = newResponseArray[i];
            delayPara(i, nextWord+" ");
        }
        setPrevPrompt(prev => [...prev, { prompt: usedPrompt, response: newResponse2 }]);
        setLoading(false);
        setInput("");
    }

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        resultData,
        setResultData,
        input,
        setInput,
        loading,      
        setLoading,
        newChat
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider;