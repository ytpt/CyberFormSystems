import React from "react";
import {Wrapper, GlobalStyle} from "./Pagination.styles";
import PaginationBtn from "./pagination-button/PaginationBtn";
import {constants} from "~constants/constants";

type TPaginationProps = {
    currentPage: number;
    totalPosts?: number;
    onPageChange: (value: number) => void;
    setSearchTitle: (value: string) => void;
}

const Pagination = ({currentPage, totalPosts, onPageChange, setSearchTitle}: TPaginationProps) => {
    const pageCount = Math.ceil((totalPosts || 0) / constants.POSTS_PER_PAGE);

    const handlePrevClick = () => {
        onPageChange(currentPage - 1);
        setSearchTitle("");
    }

    const handleNextClick = () => {
        onPageChange(currentPage + 1);
        setSearchTitle("");
    }

    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <PaginationBtn
                    content={constants.prev}
                    onClick={handlePrevClick}
                    disabled={currentPage === 1}
                />
                <h4>{constants.page} {currentPage}</h4>
                <PaginationBtn
                    content={constants.next}
                    onClick={handleNextClick}
                    disabled={currentPage === pageCount}/>
            </Wrapper>
        </>
    )
}

export default Pagination;