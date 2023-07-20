import React from "react";
import {Routes , Route, Navigate } from 'react-router-dom';
import { LinksPage } from "./pages/LinksPage";
import { CreatePage } from "./pages/CreatePage";
import { DetailPage } from "./pages/DetailPage";
import { AuthPage } from "./pages/AuthPage";

export const useRoutes = isAuthenticated =>{
    if (isAuthenticated) {
        return (
            <Routes >
                <Route path="/links" element={<LinksPage />} exact>

                </Route>
                <Route path="/create" element={<CreatePage />} exact>

                </Route>
                <Route path="/detail/:id" element={<DetailPage />} >

                </Route>
                <Route path="/" element={<Navigate  to="/create"></Navigate >} exact>

                </Route>

            </Routes >
        )
    }
    return (
        <Routes >
            <Route path="/" element={<AuthPage />} exact>

            </Route>
            <Route path="/" element={<Navigate  to="/"></Navigate >} exact>

            </Route>

        </Routes >
    )
}