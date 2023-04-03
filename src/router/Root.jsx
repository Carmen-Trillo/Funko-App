import { Outlet, useNavigation } from "react-router-dom";

function Root() {
    const navigation = useNavigation()
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Root;