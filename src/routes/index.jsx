import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/main/Main";
import Home from "../pages/main/Home";
import Foods from "../pages/main/Foods";
import Food from "../pages/main/Food";

import TermsAndConditions from "../pages/main/TermsAndConditions";
import Dashboard from "../layouts/dashboard/Dashboard";
import DashboardHome from "../pages/dashboard/DashboardHome";
import AddMenu from "../pages/dashboard/AddMenu";
import Earnings from "../pages/dashboard/Earnings";
import Auth from "../layouts/auth/Auth";

import ForgetPassword from "../pages/auth/ForgetPassword";
import OtpVerify from "../pages/auth/OtpVerify";
import ResetPassword from "../pages/auth/ResetPassword";
import SignUp from "../pages/auth/SignUp";
import NotFound from "../pages/NotFound";
import BookTable from "../pages/main/BookTable";
import SignIn from "../pages/auth/SignIn";
import UploadProduct from "../components/ui/Home/uploadProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/foods",
                element: <Foods />
            },
            {
                path: "/foods/:id",
                element: <Food />
            },
            {
                path: "/bookaTable",
                element: <BookTable/>
            },
            {
                path: "/uploadProduct",
                element: <UploadProduct/>
            },
            {
                path: "/terms-and-conditions",
                element: <TermsAndConditions />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            {
                path: "/dashboard",
                element: <DashboardHome />
            },
            {
                path: "add-menu",
                element: <AddMenu />
            },
            {
                path: "earnings",
                element: <Earnings />
            }
        ]
    },
    {
        path: "/auth",
        element: <Auth />,
        children: [
          
            {
                path: "login",
                element: <SignIn></SignIn>
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "forget-password",
                element: <ForgetPassword />
            },
            {
                path: "otp-verify",
                element: <OtpVerify />
            },
            {
                path: "reset-password",
                element: <ResetPassword />
            },
        ]
    },
    {path: "*",
        element: <NotFound />
    }
]);


export default router;