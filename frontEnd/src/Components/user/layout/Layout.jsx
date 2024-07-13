import AddLinksPage from "../pages/addLinksPage/AddLinksPage"
import Sidebar from "../sidebar/Sidebar"
import Viewright from "../viewright/Viewright"

const Layout = () => {
    return (
        <div className="grid grid-rows-2 sm:grid-cols-12">
            <div className=" sm:col-span-2"> <Sidebar /></div>
            <div className="bg-blue-100 sm:col-span-6"><AddLinksPage /></div>
            <div className="bg-red-400 sm:col-span-4 hidden sm:block"><Viewright /></div>
        </div>
    )
}

export default Layout