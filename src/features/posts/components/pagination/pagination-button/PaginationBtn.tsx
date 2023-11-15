import React from "react";

type TPaginationBtnProps = {
    content: string;
    onClick: () => void;
    disabled: boolean;
}

const PaginationBtn = ({content, onClick, disabled}: TPaginationBtnProps) => {
    return (
        <button onClick={onClick} disabled={disabled}>
            {content}
        </button>
    )
}

export default PaginationBtn;