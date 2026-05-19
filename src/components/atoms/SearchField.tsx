import type { KeyboardEvent } from "react";

interface SearchFieldProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown:(e: KeyboardEvent<HTMLInputElement>) => void;
}

export function SearchField({ value, onChange, onKeyDown }: SearchFieldProps){
    return(
        <input 
        placeholder="example: 1235678" 
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        className="bg-[#EEEEEE] pl-3 font-lucida
         text-[20px] rounded-r-full h-[40px] w-[486px] hover:shadow-[inset_4px_4px_6px_rgba(0,0,0,0.6)]
         focus:outline-none"/>
    );
}