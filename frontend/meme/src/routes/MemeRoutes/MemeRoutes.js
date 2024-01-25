import { Route } from "react-router-dom";
import AllMeme from "../../pages/AllMeme/AllMeme.js"
import { Routes, BrowserRouter } from "react-router-dom";

const MemeRoutes = () => {

    return(
        <BrowserRouter>
        <Routes>
            <Route path="/AllMemes" element={<AllMeme/>}></Route>
        </Routes>
        </BrowserRouter>
    );
};


export default MemeRoutes;