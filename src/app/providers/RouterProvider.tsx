import React from "react";
import {Routes, Route} from "react-router-dom";
import {MainPage} from "~pages/main-page/MainPage";
import {Page404} from "~pages/404-page/404Page";
import {PostPage} from "~pages/post-page/PostPage";

export const RouterProvider = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage/>}/>
            <Route path={`/posts/:postId`} element={<PostPage/>}/>
            <Route path="/not_found" element={<Page404/>}/>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    );
};