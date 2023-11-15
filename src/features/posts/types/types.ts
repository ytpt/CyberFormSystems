export type TPost = {
    body: string;
    id: number;
    title: string;
    userId: number;
};

export type TCustomError = {
    errorCode: number;
    errorMessage: string;
}

export type TCustomData = {
    posts: TPost[] | TPost;
    totalData: number;
}