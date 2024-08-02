import { SlArrowRight } from "react-icons/sl";
import { RxArchive } from "react-icons/rx";
import { MdOutlineViewHeadline } from "react-icons/md";
import { useEffect, useState } from "react";
import uuid from 'react-uuid';
import axios from 'axios';
import LinkCard from "../../../ui/LinkCard";
import { NavLink } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8000/";

const userName = "Mahi";

const AddLinksPage = () => {

    //TRIGGER FOR REALTIME DATA CHANGE
    const [edittrigger, setEditTrigger] = useState(false);
    const handleTriggerFromChild = () => {
        setEditTrigger(!edittrigger);
    };

    //STATES FOR SHOWING LINKLISTS AND LINK ADD POPUPS
    const [showLinkList, setLinkList] = useState(true);
    const [showPopUp, setshowPopUp] = useState(false);

    //DATA FETCHING FOR THE LINKS
    const [usersLinks, setUserslink] = useState();

    useEffect(() => {
        const fetchLinks = async () => {
            const response = await axios.get('http://localhost:8000/api/link', {
                params: { userName: "Mahi" }
            });

            //FILTERING LINKS IF THEY ARE DELETED OR NOT
            const filteredLinks = await response.data.filter(item => item.deleted === false && item.archived === false)
            setUserslink(filteredLinks)
        }
        fetchLinks();
    }, [showPopUp, edittrigger])

    const AddUrlPopUp = () => {
        //ADDING LINKS TO THE DATABASE
        const [url, setUrl] = useState(null);

        const handleChange = (e) => {
            const { value, name } = e.target;
            setUrl((preve) => {
                return {
                    ...preve,
                    [name]: value
                }
            })
        }

        const handleSubmit = async (event) => {
            event.preventDefault();

            //SETTING PARAMETERS FOR NEW LINK
            const userName = "Mahi";
            const link_id = uuid();

            //CONFIG IS USED TO SEND QUERY PARAMS
            const config = {
                params: {
                    userName,
                    link_id
                }
            };
            const postLink = async () => {
                await axios.post("http://localhost:8000/api/link", url, config)
                    .then(response => {
                        console.log(response.data)
                    })
            }
            await postLink();
        }

        return (
            <form className='w-full bg-slate-500 p-4 mt-6 rounded-2xl' onSubmit={handleSubmit}>
                <div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor='url' className="block  text-sm font-medium text-gray-900 dark:text-white">Enter URL</label>
                        <input type='text' name='actual_link' id='actual_link' onChange={handleChange} placeholder="https://www.wikipedia.org" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mt-3">
                        <div className='btn mr-2' onClick={() => {
                            setshowPopUp(false);
                            setLinkList(true);
                        }}>Cancel</div>
                        <div className='btn btn-error' type="submit" onClick={() => {
                            handleSubmit(event);
                            setshowPopUp(false);
                            setLinkList(true);
                        }} > Submit</div>
                    </div>
                </div>
            </form >
        )
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
                        <a href={`http://localhost:5173/${userName}`}>{`http://localhost:5173/${userName}`}</a>
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
                            setLinkList(false);
                        }}>+ Add link</button>
                </div>

                <div className="flex justify-between items-center h-12 sm:mt-4 w-full">
                    <div className="flex items-center text-center gap-1">
                        <MdOutlineViewHeadline />
                        Add header
                    </div>
                    <div>
                        <NavLink to="../archived" className="flex items-center text-center gap-1">
                            <div>View archive</div>
                            <RxArchive />
                        </NavLink>

                    </div>
                </div>

                {/* POPUP GOES HERE */}
                {showPopUp && <AddUrlPopUp />}

                {/* LINK CARD GOES FROM HERE */}
                {
                    showLinkList && usersLinks && usersLinks.map((link, index) => <LinkCard props={link} key={index} onTrigger={handleTriggerFromChild} />)
                }

            </div >

        </div >
    )
}

export default AddLinksPage