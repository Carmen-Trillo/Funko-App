import { createBrowserRouter } from "react-router-dom";
import FunkoHandler from '../handler/funkoHandler';
import NewFunko from "../pages/NewFunko";
import Edit from "../pages/Edit";
import Funkos from "../pages/Funkos";
import LayoutPublic from "../layout/LayoutPublic";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutPublic />,
        children: [
            {
                index: true,
                element: <Funkos />,
                loader: fetchFunkos,
            },
            {
                path: '/newFunko',
                element: <NewFunko />,
            },
            {
                path: '/editFunko/:id',
                element: <Edit />,
                loader: fetchFunko
            },    
        ]
    },
]);

async function fetchFunkos() {
    const funkos = await FunkoHandler.loadFunkos();
    return { funkos };
}

async function fetchFunko({ params }) {
    const funko = await FunkoHandler.loadFunko(params.id);
    return { funko };
}
