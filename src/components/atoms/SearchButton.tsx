interface SearchButtonProps {
    onClick: () => void;
}

export function SearchButton({ onClick }: SearchButtonProps) {
    return(
        <button 
        type="button"
        onClick={onClick}
        className="rounded h-[40px] bg-[#fafafa] font-lucida px-2 py-1 ml-3 text-[#444444] text-[20px]
        hover:text-[#970000] hover:shadow-[inset_4px_4px_6px_rgba(0,0,0,0.6)] active:text-[#444444] cursor-pointer"> 
            search 
        </button>
    );
}