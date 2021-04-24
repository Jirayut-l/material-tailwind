import  Dashboard from "./screens/admin/Dashboard";
import Icon from './screens/admin/Icon';
import Login from "./screens/auth/Login";

export const routes = [
    {
        path: "/index",
        name: "Dashboard",
        iconColor: "Primary",
        component: Dashboard,
        layout: "/admin",
    },
    {
        path: "/icons",
        name: "Icons",
        iconColor: "Primary",
        component: Icon,
        layout: "/admin",
    },
    {
        path: "/login",
        name: "Login",
        iconColor: "Info",
        component: Login,
        layout: "/auth",
    },

];

