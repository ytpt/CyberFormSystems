import React from "react";
import {BrowserRouter} from "react-router-dom";
import {RouterProvider} from "./RouterProvider";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import store from "~features/posts/store/store";
import {Provider as ReduxProvider} from "react-redux";

const queryClient = new QueryClient();

export function Provider() {
    return (
        <ReduxProvider store={store}>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <RouterProvider/>
                </BrowserRouter>
            </QueryClientProvider>
        </ReduxProvider>
    );
}