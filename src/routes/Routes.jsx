import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../layouts/Layout";
import UnderConstruction from "../components/UnderConstruction";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <UnderConstruction />
            },
            {
                path: "/about",
                element: <div>About</div>
            }
        ]
    }
])

const Routes = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default Routes