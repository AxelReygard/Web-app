import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Page/Home"



const Router = ()=>{
    return(
        <BrowserRouter>
            <Routes path="/">
                    <Route
                        path="/"
                        element={<Home/>}
                    />
            </Routes>
        </BrowserRouter>
    )
}

export default Router