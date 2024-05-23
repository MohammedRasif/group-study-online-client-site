import Banner from "./Banner";
import Features from "./Features";
import NavBar from "./NavBar";
import Neque from "./Neque";
import Ratione from "./Ratione ";
import Values from "./Values";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Values></Values>
            <Features></Features>
            <Neque></Neque>
            <Ratione></Ratione>
        </div>
    );
};

export default Home;