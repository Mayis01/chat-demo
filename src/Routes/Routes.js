import Chat from "../Components/Chat";
import Login from "../Components/Login"

;
import { CHAT_ROUTE, LOGIN_ROUTE } from "../Utils/constants";


export const publicRoutes = [

    {
        path:LOGIN_ROUTE,
        component:Login
    }

]

export const privateRoutes = [
    {
        path:CHAT_ROUTE,
        component:Chat
    }
]