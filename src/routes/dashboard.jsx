import SalaryCalc from "../views/salary/SalaryCalc.jsx";

var dashRoutes = [
    {
        path: "/salary",
        name: "Fizetés kalkulátor",
        icon: "nc-icon nc-bullet-list-67",
        component: SalaryCalc
    },
    { redirect: true, path: "/", pathTo: "/invites", name: "Dashboard" }
];
export default dashRoutes;
