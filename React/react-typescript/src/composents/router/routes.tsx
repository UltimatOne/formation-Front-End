import { RouteObject, useRoutes } from "react-router-dom";
import Count from "../count/count";
import HerosListe from "../pages/herosListe";

const Router: React.FC = () =>{
const routes: RouteObject[] = [
    {
        path: "/",
        element: <HerosListe/>
    },
    {
        path: "/count",
        element: <Count />
    },
];


return <>{useRoutes(routes)}</>
}
export default Router;