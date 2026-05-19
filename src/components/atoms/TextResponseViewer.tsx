import { CodeBlock } from "react-code-block";
import { useState } from "react";
import { useCopyToClipboard } from "react-use";

interface TextResponseViewerProps{
    response: any;
    mode: string;
}

export function TextResponseViewer({ response, mode }: TextResponseViewerProps){
    
    let language: string = "";
    let code: string = "";

    const [, copyToCliptboard]  = useCopyToClipboard();
    const [isCopied, setIsCopied] = useState(false);

    const copyCode = () =>{
        copyToCliptboard(code);
        setIsCopied(true);

        setTimeout(() => {
            setIsCopied(false);
        }, 2000);
    }

    if (!response || response === "") {
        return (
            <div className="bg-[#3D3B3B] h-[600px] w-full flex items-center justify-center rounded-b">
                <span className="text-gray-400">Aguardando busca...</span>
            </div>
        );
    }
    
    const prettyString = JSON.stringify(response,null, 2);
    const rawString = JSON.stringify(response);

    if (mode === "raw"){
        language = "text";
        code = rawString;
    } else {
        language = "json";
        code = prettyString;
    }

    return(
        <CodeBlock code = { code } language = { language }>
            <div className="relative">
                <CodeBlock.Code className = "bg-[#3D3B3B] p-6 rounded-b h-[600px] text-white overflow-auto ">
                    <div className="table-row">
                        <CodeBlock.LineNumber className="table-cell pr-4 text-sm text-gray-500 text-right select-none"></CodeBlock.LineNumber>
                        <CodeBlock.LineContent className="table-cell">
                            <CodeBlock.Token />
                        </CodeBlock.LineContent>
                    </div>
                </CodeBlock.Code>
                <button className="h-[34px] flex items-center justify-center bg-[#fafafa] font-lucida text-[#444444] text-[20px] rounded px-2 py-1 absolute top-2 right-2
                hover:text-[#970000] hover:shadow-[inset_4px_4px_6px_rgba(0,0,0,0.6)] active:text-[#444444] cursor-pointer"
                onClick={copyCode}>
                    {isCopied ? 'Copied!' : 'Copy code'}
                </button>
            </div>
        </CodeBlock>
    );
}