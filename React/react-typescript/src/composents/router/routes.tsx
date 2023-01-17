import { RouteObject, useRoutes } from "react-router-dom";
import Get from "../Fetch/Get";
import GetId from "../Fetch/GetId";
import HerosDetails from "../../pages/herosDetails";
import HerosListe from "../../pages/herosListe";
import HerosEdit from "../../pages/herosEdit";



const Router: React.FC = () =>{
const routes: RouteObject[] = [
    {
        path: "/",
        element: <HerosListe/>
    },
    {
        path: "/:id",
        element: <HerosDetails />
    },
    {
        path: "/fetch",
        element: <Get/>
    },
    {
        path: "/users/:id",
        element: <GetId/>
    },
    {
        path: "/edit/:id",
        element: <HerosEdit/>
    }
];


return <>{useRoutes(routes)}</>
}
export default Router;