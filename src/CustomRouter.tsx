import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App";
import Walking from "./Walking";

function CustomRouter () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/walking" element={<Walking/>} />
            </Routes>
        </BrowserRouter>
    );
}
export default CustomRouter;