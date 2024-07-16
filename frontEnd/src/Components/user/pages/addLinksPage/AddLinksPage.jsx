import { SlArrowRight } from "react-icons/sl";
import { RxArchive } from "react-icons/rx";
import { MdOutlineViewHeadline } from "react-icons/md";

import { useState } from "react";
import LinkCard from "../../../ui/LinkCard";







const AddLinksPage = () => {

    const [showLinkList, setLinkList] = useState(true);
    const [showPopUp, setshowPopUp] = useState(false);


    const LinkAddpopUp = (props) => {
        return (props.trigger) ? (
            <div className="bg-white text-black w-full mt-6 rounded-2xl">
                <div className="flex card-body">
                    <div>
                        <h2 className="card-title font-bold mb-2">Enter URL</h2>
                        <input
                            type="text"
                            placeholder="www.example.com"
                            className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-error" onClick={() => {
                            setLinkList(true)
                            setshowPopUp(false)
                        }}>close</button>
                        <button className="btn" onClick={() => {
                            setLinkList(true)
                            setshowPopUp(false)
                        }}>Save</button>
                    </div>
                </div>
            </div>
        ) : "";
    }


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
                                       w-full
                                       h-12
                                       rounded-full
                                       bg-orange-500
                                       hover:bg-orange-600" onClick={() => {
                            setshowPopUp(true);
                            setLinkList(false)
                        }}>+ Add link</button>
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

                <LinkAddpopUp trigger={showPopUp} className="w-full" />
                {/* link card goes from here */}

                {
                    showLinkList && <LinkCard />
                }

            </div >

        </div >
    )
}

export default AddLinksPage