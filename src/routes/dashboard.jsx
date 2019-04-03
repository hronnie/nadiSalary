import Settings from "../views/Settings/Settings.jsx";
import SalaryCalc from "../views/salary/SalaryCalc.jsx";
import Help from "../views/Help/Help.jsx";

var dashRoutes = [
    {
        path: "/salary",
        name: "Fizetés kalkulátor",
        icon: "nc-icon nc-bullet-list-67",
        component: SalaryCalc
    },
    // {
    //     path: "/settings",
    //     name: "Beállítások",
    //     icon: "nc-icon nc-settings-gear-65",
    //     component: Settings
    // },
    // {
    //     path: "/help",
    //     name: "Segítség",
    //     icon: "nc-icon nc-bulb-63",
    //     component: Help
    // },
    { redirect: true, path: "/", pathTo: "/invites", name: "Dashboard" }
];
export default dashRoutes;
