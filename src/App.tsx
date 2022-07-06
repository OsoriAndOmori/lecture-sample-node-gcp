import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./routers/HelloWorld";
import Level1 from "./routers/Level1";
import Level2 from "./routers/Level2";
import Level3 from "./routers/Level3";
import Level4 from "./routers/Level4";
import Level5 from "./routers/Level5";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HelloWorld/>}/>
                <Route path="/level1" element={<Level1/>}/>
                <Route path="/level2" element={<Level2/>}/>
                <Route path="/level3" element={<Level3/>}/>
                <Route path="/level4" element={<Level4/>}/>
                <Route path="/level5" element={<Level5/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;