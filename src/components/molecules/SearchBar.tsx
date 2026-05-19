import { useState } from "react";
import type { KeyboardEvent } from "react";
import { SearchButton } from "../atoms/SearchButton";
import { SearchField } from "../atoms/SearchField";
import { SearchTypeButton } from "../atoms/SearchTypeButton";

interface SearchBarProps {
    setResponse: (value: string) => void;
}

export function SearchBar({ setResponse }: SearchBarProps){
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = async () => {
        if (!searchTerm.trim()) return;
        console.log("busca executada")
        try {
            const ApiResponse = await fetch(`http://localhost:8080/work/${searchTerm}`);
            const data = await ApiResponse.json();
            setResponse(data);
        } catch (err) {
            console.error("Fail gathering data from API: ", err);
        }
        
        
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter"){
            handleSearch();
            console.log("busca executada")
        }
    }

    return(
        <div className="pt-[55px] pb-[55px]">
            <SearchTypeButton/>
            <SearchField
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <SearchButton onClick = {handleSearch}/>
        </div>
    );
}