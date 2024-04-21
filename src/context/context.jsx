import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const[input, setInput] = useState("");
    const[recentPrompt, setRecentPrompt] = useState("");
    const[preventPropmpts,setPreventPrompts] = useState([]);
    const[showResult,setShowResult] = useState(false);
    const[loading,setLoading] = useState(false);
    const [resultData,setResultData] = useState("");

    const onSent = async (prompt) => {
        await runChat(prompt)
    }

    onSent("Which IT career to choose in 2024");

    const contextValue = {

    }

    return (
        <Context.Provider value={{contextValue}}>
            {props.children}
        </Context.Provider>
    )

}

export default ContextProvider;