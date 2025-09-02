import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/Login";
import About from "../pages/About";

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Login/>
            },
            {
                path:"/about",
                element:<About/>
            }
        ]
    }
])

export default appRouter;