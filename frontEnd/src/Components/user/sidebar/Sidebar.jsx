import { TiEqualsOutline } from "react-icons/ti";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { NavLink } from "react-router-dom";


const Sidebar = () => {

    return (

        <div className="sm:h-screen relative">
            <div className="flex sm:flex-col p-2 sm:p-5 sm:gap-2 " >
                <div className="items-center
                            p-3 sm:w-44 
                            sm:h-12 
                            cursor-pointer 
                            hidden 
                            sm:block" >
                    <div className="sm:text-xl">Icon</div>
                </div>

                <NavLink to="/links" className="flex flex-col
                            sm:flex-row
                            p-3 sm:w-44 
                            sm:h-12 
                            items-center 
                            sm:rounded-2xl 
                            hover:bg-orange-100 
                            hover:duration-500 
                            cursor-pointer" >

                    <TiEqualsOutline className="text-2xl" />
                    <div className="sm:text-xl sm:ml-3">Links</div>
                </ NavLink>
                <NavLink to="/appearance" className="flex flex-col
                            sm:flex-row
                            p-3 sm:w-44 
                            sm:h-12 
                            items-center 
                            sm:rounded-2xl 
                            hover:bg-orange-100 
                            hover:duration-500 
                            cursor-pointer" >

                    <BiCategoryAlt className="text-2xl" />
                    <div className="sm:text-xl sm:ml-3">Appearance</div>
                </ NavLink>
                <NavLink to="/analytics" className="flex flex-col
                            sm:flex-row
                            p-3 sm:w-44 
                            sm:h-12 
                            items-center 
                            sm:rounded-2xl 
                            hover:bg-orange-100 
                            hover:duration-500 
                            cursor-pointer" >

                    <MdOutlineAnalytics className="text-2xl" />
                    <div className="sm:text-xl sm:ml-3">Analytics</div>
                </ NavLink>
                <NavLink to="/setting" className="flex flex-col
                            sm:flex-row
                            p-3 sm:w-44 
                            sm:h-12 
                            items-center 
                            sm:rounded-2xl 
                            hover:bg-orange-100 
                            hover:duration-500 
                            cursor-pointer" >

                    <MdOutlineSettings className="text-2xl" />
                    <div className="sm:text-xl sm:ml-3">Setting</div>
                </ NavLink>

                <div className="flex 
                                flex-col 
                                sm:flex-row 
                                gap-2 
                                sm:block 
                                text-center absolute 
                                bottom-0 mb-4">

                    <div className="hidden 
                                   sm:block 
                                   p-3 sm:w-44 
                                   sm:h-12 sm:rounded-3xl
                                 bg-slate-100 
                                 hover:bg-slate-300 
                                  after:hover:duration-1000 
                                  cursor-pointer">Try pro for free</div>
                    <div className="hidden 
                                   sm:block p-2 
                                   sm:w-44 sm:h-12 
                                   mt-1 sm:rounded-3xl 
                                   border-2 
                                   hover:border-slate-300 
                                   hover:duration-500 
                                   cursor-pointer">Clicker Username</div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar