import { Outlet } from "react-router-dom";
/* import Header from "../components/Header";
import Footer from "../components/Footer"; */
import '../../src/index.css';

const LayoutPublic = () => {

    return (
        <>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    );
};

export default LayoutPublic;