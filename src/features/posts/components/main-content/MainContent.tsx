import React, {useState, ChangeEvent} from "react";
import {useQuery, UseQueryResult} from "@tanstack/react-query";
import Loader from "~shared/ui/loader/Loader";
import Posts from "~features/posts/components/posts/Posts";
import {fetchPosts, fetchPostsByTitle} from "~features/posts/components/main-content/api/api";
import Pagination from "~features/posts/components/pagination/Pagination";
import {Wrapper} from "./MainContent.styles";
import {TCustomData, TCustomError} from "~features/posts/types/types";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {setPosts} from "~features/posts/store/actions";
import SearchForm from "~features/posts/components/search-form/SearchForm";
import {constants} from "~constants/constants";
import {useDebounce} from "~features/posts/hooks/useDebounce";

const MainContent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchTitle, setSearchTitle] = useState<string>("");
    const debounceSearchTerm = useDebounce(searchTitle, 1000);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => setSearchTitle(e.target.value);
    const handleCurrentPage = (page: number) => setCurrentPage(page);

    const { isLoading, data }: UseQueryResult<TCustomData, TCustomError> = useQuery({
        queryKey: ["posts", currentPage, debounceSearchTerm],
        queryFn: () => {
            if (debounceSearchTerm) {
                return fetchPostsByTitle(debounceSearchTerm);
            } else {
                return fetchPosts(currentPage);
            }
        }
    })

    const handlePostClick = (postId: number) => {
        if (data) {
            dispatch(setPosts(data.posts));
            navigate(`/posts/${postId}`);
        }
    }

    return (
        <Wrapper>
            <Pagination
                currentPage={currentPage}
                totalPosts={data?.totalData}
                onPageChange={handleCurrentPage}
                setSearchTitle={setSearchTitle}
            />
            <SearchForm
                handleInputChange={handleInputChange}
                searchTitle={searchTitle}
                content={constants.searchValue}
            />
            {isLoading
                ? <Loader/>
                : data && Array.isArray(data.posts) && data.posts.length > 0
                    ? <Posts
                        posts={data.posts}
                        onPostClick={handlePostClick}
                        currentPage={currentPage}
                    />
                    : <h4>{constants.postNotFound}</h4>
            }

        </Wrapper>
    )
}

export default MainContent;