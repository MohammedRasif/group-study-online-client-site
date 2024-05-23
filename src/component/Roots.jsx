import { Outlet } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Roots = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;