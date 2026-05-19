interface ChooseViewModeProps{
    setMode: (value: string) => void;
}

export function ChooseViewMode({ setMode }: ChooseViewModeProps){
    return(
        <div className=" rounded-t flex justify-between items-center bg-[#EEEEEE] w-full h-[30px] font-georgia text-[#970000] px-2">
            <div>
                <p>Choose visualization mode:</p>
            </div>
            <div>
                <div>
                    <button 
                    onClick={() => setMode("raw")}
                    className="cursor-pointer hover:text-[#444444] active:text-[#970000]">raw</button>
                    <span> | </span>
                    <button 
                    onClick={() => setMode("pretty")}
                    className="cursor-pointer hover:text-[#444444] active:text-[#970000]">Pretty JSON</button>
                </div>
                
            </div>
        </div>
    );
}