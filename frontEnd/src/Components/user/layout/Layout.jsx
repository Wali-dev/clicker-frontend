import { Outlet } from "react-router-dom"
import Sidebar from "../sidebar/Sidebar"
import Viewright from "../viewright/Viewright"

const Layout = () => {
    return (
        <div className="grid sm:grid-cols-12">
            <div className=" sm:col-span-2 "> <Sidebar /></div>
            <div className="bg-blue-100 sm:col-span-6"><Outlet /></div>
            <div className="bg-red-400 sm:col-span-4 hidden sm:block"><Viewright /></div>
        </div>
    )
}
// sm:sticky sm:left-0 sm:top-0 bg-white
export default Layout