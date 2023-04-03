import { createBrowserRouter } from "react-router-dom";
import FunkoHandler from '../handler/KunkoHandler';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
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
                    /* {
                        path: '/detailedFunko/:id',
                        element: <DetailedFunko/>,
                        loader: fetchFunko,
                    },   */  
                    {
                        path: '/editFunko/:id',
                        element: <EditFunko />,
                        loader: fetchFunko
                    },    
                ]
            },
        ]
);

async function fetchFunkos() {
    const funkos = await FunkoHandler.loadFunkos();
    return { funkos };
}

async function fetchFunko({ params }) {
    const funko = await FunkoHandler.loadFunko(params.id);
    return { funko };
}
