import { Route } from "react-router-dom";
import AllMeme from "../../pages/AllMeme/AllMeme.js"
import { Routes } from "react-router-dom";

const MemeRoutes = () => {

    return(
        <Routes>
            <Route path="/AllMemes" element={<AllMeme/>}></Route>
        </Routes>
    );
};


export default MemeRoutes;