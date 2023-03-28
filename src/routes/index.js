import HomePage from "~/pages/Home";
import Login from "~/pages/Login";

const publicRoutes = [
    {path: '/' , component:HomePage},
    {path: '/login' , component:Login},
]

const privateRoutes =[

]

export {publicRoutes,privateRoutes}