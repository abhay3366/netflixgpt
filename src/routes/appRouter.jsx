import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Login from "../components/Login";
import About from "../pages/About";
import Home from "@/pages/Home";
import TvShow from "@/pages/TvShow";
import Movies from "@/pages/Movies";
import News from "@/pages/News";
import MyList from "@/pages/MyList";

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
                path:"/home",
                element:<Home/>
            },
             {
                path:"/tvShow",
                element:<TvShow/>
            },
             {
                path:"/movies",
                element:<Movies/>
            },
             {
                path:"/news",
                element:<News/>
            },
             {
                path:"/mylist",
                element:<MyList/>
            },
          
        ]
    }
])

export default appRouter;