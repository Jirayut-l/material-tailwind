import  Dashboard from "./screens/admin/Dashboard";
import Login from "./screens/auth/Login";

const routes = [
    {
        path: "/index",
        name: "Dashboard",
        iconColor: "Primary",
        component: Dashboard,
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
export default routes;
