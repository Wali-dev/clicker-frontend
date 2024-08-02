import { TiEqualsOutline } from "react-icons/ti";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";


const Sidebar = () => {

    return (

        <div className="sm:h-screen relative sticky top-0 bg-gray-50 shadow-md">
            <div className="flex sm:flex-col sm:p-3 sm:p-5 sm:gap-2">
                {/* ICON */}
                <div className="hidden sm:flex items-center justify-center p-3 bg-gray-200 rounded-full cursor-pointer">
                    <div className="text-lg sm:text-xl font-semibold">Icon</div>
                </div>

                {/* NAVIGATION LINK */}
                <NavLink to="links" className="flex flex-col sm:flex-row items-center p-3 bg-white rounded-lg shadow-sm hover:bg-orange-50 transition-colors duration-300 cursor-pointer">
                    <TiEqualsOutline className="text-2xl" />
                    <div className="ml-3 text-base sm:text-lg font-medium">Links</div>
                </NavLink>

                <NavLink to="appearance" className="flex flex-col sm:flex-row items-center p-3 bg-white rounded-lg shadow-sm hover:bg-orange-50 transition-colors duration-300 cursor-pointer">
                    <BiCategoryAlt className="text-2xl" />
                    <div className="ml-3 text-base sm:text-lg font-medium">Appearance</div>
                </NavLink>

                <NavLink to="analytics" className="flex flex-col sm:flex-row items-center p-3 bg-white rounded-lg shadow-sm hover:bg-orange-50 transition-colors duration-300 cursor-pointer">
                    <MdOutlineAnalytics className="text-2xl" />
                    <div className="ml-3 text-base sm:text-lg font-medium">Analytics</div>
                </NavLink>

                <NavLink to="setting" className="flex flex-col sm:flex-row items-center p-3 bg-white rounded-lg shadow-sm hover:bg-orange-50 transition-colors duration-300 cursor-pointer">
                    <MdOutlineSettings className="text-2xl" />
                    <div className="ml-3 text-base sm:text-lg font-medium">Setting</div>
                </NavLink>

                {/* FOOTER */}
                <div className="flex flex-col sm:flex-row gap-2 mt-auto text-center sm:block absolute bottom-0 mb-4 mx-2">
                    <div className="hidden sm:flex items-center justify-center p-3 bg-slate-100 rounded-lg shadow-sm hover:bg-slate-200 transition-colors duration-300 cursor-pointer">
                        Try Pro for Free
                    </div>
                    <div className="hidden sm:flex items-center justify-center p-3 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:border-gray-400 transition-colors duration-300 cursor-pointer">
                        Clicker Username
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar