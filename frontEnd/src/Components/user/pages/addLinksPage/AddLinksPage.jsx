import { SlArrowRight } from "react-icons/sl";
import { RxArchive } from "react-icons/rx";
import { MdOutlineViewHeadline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";
import { AiOutlineLayout } from "react-icons/ai";
import { LiaDirectionsSolid } from "react-icons/lia";
import { MdOutlineWallpaper } from "react-icons/md";
import { MdOutlineSchedule } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RxShare2 } from "react-icons/rx";



const AddLinksPage = () => {
    return (
        <div className="mt-0 sm:mt-4 mx-4">
            <div className="flex flex-wrap 
                            justify-around 
                            bg-slate-300 
                            sm:rounded-3xl
                            py-4
                            items-center sm:space-y-2 
                            space-y-2 ">
                <div>
                    <div>Your links are live here:</div>
                    <div>
                        <a href="https://www.w3schools.com">clicker.com/userName</a>
                    </div>
                </div>
                <button className="btn btn-wide rounded-3xl">Copy your Clicker URL</button>
            </div>

            <div className="flex flex-col max-w-[700px] m-auto">
                <div className="h-24 p-5">
                    <button className="btn btn-active rounded-3xl w-24 text-white bg-black">Links</button>
                    <button className="btn btn-active rounded-3xl w-24 text-white bg-black ml-2">Shop</button>
                </div>
                <div className="flex justify-center items-center">
                    <button className="text-white 
                                       font-semibold
                                       text-lg tracking-wide
                                       w-96
                                       h-12
                                       rounded-full
                                       bg-orange-500
                                       hover:bg-orange-600">+ Add link</button>
                </div>
                <div className="flex justify-between items-center h-12 sm:mt-4 w-full">
                    <div className="flex justify-center items-center">
                        <MdOutlineViewHeadline />
                        Add header
                    </div>
                    <div className="flex justify-center items-center">
                        <RxArchive />
                        <div>View archive</div>
                        <SlArrowRight />
                    </div>
                </div>
                {/* link card goes from here */}
                <div className="sm:mt-4"> {/* */}
                    <div className="w-full rounded-3xl my-4 h-36 grid grid-cols-12 relative bg-slate-50">   {/*this is the section is devided into two drag button and rest of the body */}
                        <div className=" col-span-1 my-auto text-2xl"><RxDragHandleDots2 /></div> {/* drag icon*/}
                        <div className="col-span-11 my-auto">  {/* rest of the body*/}
                            <div className="flex items-center justify-between "> {/* title, link edit button and share+active button*/}
                                <div className=""> {/* title link edit block*/}
                                    <div className="flex items-center font-semibold">Title
                                        <FiEdit2 className="ml-3" />
                                    </div>
                                    <div className="flex items-center font-semibold">www.link.com
                                        <FiEdit2 className="ml-3" />
                                    </div>
                                </div>
                                <div className="flex mr-8"> {/* share + active toggle*/}
                                    <button><RxShare2 className="text-xl mr-2" /></button>
                                    <input type="checkbox" className="toggle toggle-sm" defaultChecked />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap shrink gap-2 text-lg font-thin mx-2" > {/* action buttons*/}
                                <button><AiOutlineLayout /></button>
                                <button><LiaDirectionsSolid /></button>
                                <button><MdOutlineWallpaper /></button>
                                <button><MdOutlineSchedule /></button>
                                <button>< IoMdLock /></button>
                                <button><IoAnalytics /></button>
                                <button className="absolute right-12"><MdOutlineDeleteOutline /></button>
                            </div >
                        </div >

                    </div >
                    <div className="w-full rounded-3xl my-4 h-36 grid grid-cols-12 relative bg-slate-50">
                        <div className=" col-span-1 my-auto text-2xl"><RxDragHandleDots2 /></div>
                        <div className="col-span-11 my-auto">
                            <div className="flex items-center justify-between">
                                <div className="">
                                    <div className="flex items-center font-semibold">Title
                                        <FiEdit2 className="ml-3" />
                                    </div>
                                    <div className="flex items-center font-semibold">www.link.com
                                        <FiEdit2 className="ml-3" />
                                    </div>
                                </div>
                                <div className="flex mr-8">
                                    <RxShare2 className="text-xl mr-2" />
                                    <input type="checkbox" className="toggle toggle-sm" defaultChecked />
                                </div>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-2 text-lg font-thin mx-2" >
                                <button><AiOutlineLayout /></button>
                                <button><LiaDirectionsSolid /></button>
                                <button><MdOutlineWallpaper /></button>
                                <button><MdOutlineSchedule /></button>
                                <button>< IoMdLock /></button>
                                <button><IoAnalytics /></button>
                                <button className="absolute right-12"><MdOutlineDeleteOutline /></button>
                            </div >
                        </div >

                    </div >
                </div >

            </div >



        </div >
    )
}

export default AddLinksPage