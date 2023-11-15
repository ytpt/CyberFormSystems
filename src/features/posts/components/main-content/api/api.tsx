import {constants} from "~constants/constants";

export const fetchPosts = async (page: number) => {
    const url = `${constants.BASE_URL}/?_page=${page}&_limit=${constants.POSTS_PER_PAGE}`;
    const response = await fetch(url);
    const totalData = response.headers.get('X-Total-Count');
    const data = await response.json();

    return {
        posts: data,
        totalData,
    }
}

export const fetchPostsByTitle = async (title: string) => {
    const url = `${constants.BASE_URL}?title_like=${encodeURIComponent(title)}`;
    const response = await fetch(url);
    const data = await response.json();

    return {
        posts: data
    }
};