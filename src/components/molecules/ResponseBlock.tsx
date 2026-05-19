import { useState } from "react";
import { ChooseViewMode } from "../atoms/ChoseViewMode";
import { TextResponseViewer } from "../atoms/TextResponseViewer";

interface ResponseBlockProps {
    response: any;
}

export function ResponseBlock({ response }: ResponseBlockProps){
    const [mode, setMode] = useState("");
    return(
        <div className="w-[700px] h-[630px] rounded">
            <ChooseViewMode setMode = { setMode }/>
            <TextResponseViewer response = { response } mode = { mode }/>
        </div>
    );
}