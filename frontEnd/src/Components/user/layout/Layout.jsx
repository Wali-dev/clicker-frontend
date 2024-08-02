
import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Viewright from "../viewright/Viewright";

const Layout = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 min-h-screen">
            {/* SIDEBAR*/}
            <div className="bg-gray-100 sm:col-span-2 border-r border-gray-200">
                <Sidebar />
            </div>

            {/* MAIN */}
            <div className="bg-white sm:col-span-6 border-r border-gray-200 p-4">
                <Outlet />
            </div>

            {/* RIGNT VIEW */}
            <div className="bg-gray-100 sm:col-span-4 hidden sm:block border-l border-gray-200">
                <Viewright />
            </div>
        </div>
    );
}

export default Layout;
