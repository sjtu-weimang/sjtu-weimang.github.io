//路由配置

import Layout from "../pages/Layout";
import Login from "../pages/Login";
import Main from "../pages/Main";

import { createBrowserRouter } from "react-router-dom";
//配置路由实例

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/main",
        element: <Layout />,
    }
])
export default router;
