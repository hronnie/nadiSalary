import SalaryCalc from "../views/salary/SalaryCalc.jsx";

var dashRoutes = [
    {
        path: "/",
        name: "Fizetés kalkulátor",
        icon: "nc-icon nc-bullet-list-67",
        component: SalaryCalc
    },
    { redirect: true, path: "/", pathTo: "/", name: "Fizetés kalkulátor" }
];
export default dashRoutes;
