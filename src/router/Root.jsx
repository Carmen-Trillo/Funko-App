import { Outlet, useNavigation } from "react-router-dom";
/* import Header from "../components/Header";
import Footer from "../components/Footer"; */

function Root() {
    const navigation = useNavigation()
    return (
        <>
            {/* <Header /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    );
}

export default Root;