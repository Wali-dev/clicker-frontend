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

const LinkCard = () => {
    return (
        <div className="sm:mt-4">
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

        </div >

    )
}

export default LinkCard