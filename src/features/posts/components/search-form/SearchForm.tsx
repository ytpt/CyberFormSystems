import React, {ChangeEvent, FormEvent} from "react";
import {constants} from "~constants/constants";
import SearchImg from "./assets/search.png";
import {Input, Button, Form, GlobalStyle} from "./SearchForm.styles";

type TSearchProps = {
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
    content: string;
    searchTitle: string | null;
}

const SearchForm = ({handleInputChange, content, searchTitle}: TSearchProps) => {
    const onSubmit = (e: FormEvent) => e.preventDefault();

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        const syntheticEvent = {target: {value: inputValue}} as ChangeEvent<HTMLInputElement>;
        handleInputChange(syntheticEvent);
    };

    return (
        <>
            <GlobalStyle/>
            <Form onSubmit={onSubmit}>
                <Input
                    type="text"
                    value={searchTitle || ''}
                    onChange={onChange}
                    placeholder={content}
                />
                <Button type="submit">
                    <img src={SearchImg} alt={constants.searchValue} width={20} height={20}/>
                </Button>
            </Form>
        </>
    )
}

export default SearchForm;