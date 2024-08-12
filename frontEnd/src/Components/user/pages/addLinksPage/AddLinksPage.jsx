
import { RxArchive } from "react-icons/rx";
import { MdOutlineViewHeadline } from "react-icons/md";
import { useEffect, useState } from "react";
import uuid from 'react-uuid';
import axios from 'axios';
import LinkCard from "../../../ui/LinkCard";
import { NavLink } from "react-router-dom";

axios.defaults.baseURL = "http://localhost:8000/";

// const userName = "Mahi";

const AddLinksPage = () => {
    //SET CURRENT USER
    const [currentUser, setCurrentUser] = useState("");

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
        //GET THE STORED TOKEN OF THE CURRENT USER
        const storedToken = sessionStorage.getItem('authToken');

        //USING THE TOKEN TO GET HE USER INFORMATIONS
        const fetchUserName = async () => {
            const response = await axios.get('http://localhost:8000/api/user/loggeduser', {
                headers: {
                    'Authorization': `Bearer ${storedToken}`
                }
            })
            setCurrentUser(response.data);
        }
        fetchUserName();
    }, [])

    useEffect(() => {
        const { userName } = currentUser;

        //SET USERNAME IN THE LOCAL SOTRAGE FOR FURTHER USE
        sessionStorage.setItem('userName', userName)
        const fetchLinks = async () => {
            const response = await axios.get('http://localhost:8000/api/link', {
                params: { userName }
            });

            //FILTERING LINKS IF THEY ARE DELETED OR NOT
            const filteredLinks = await response.data.filter(item => item.deleted === false && item.archived === false)
            setUserslink(filteredLinks)
        }
        fetchLinks();
    }, [showPopUp, edittrigger, currentUser])

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

            //CHECKING IF THE URL IS STARTING WITH THE PROPER HEADER OR ELSE ADD THE HEADER
            if (!url.actual_link.startsWith("http")) {
                setUrl(url.actual_link = "https://" + url.actual_link);
            }

            // SETTING PARAMETERS FOR NEW LINK
            const userName = currentUser.userName;
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

            <form className="w-full bg-white p-6 mt-6 rounded-2xl shadow-lg" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                    {/* URL Input Field */}
                    <div>
                        <label htmlFor="actual_link" className="block text-sm font-medium text-gray-700">Enter URL</label>
                        <input
                            type="text"
                            name="actual_link"
                            id="actual_link"
                            onChange={handleChange}
                            placeholder="https://www.wikipedia.org"
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end gap-4 mt-4">
                        <button
                            type="button"
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg shadow-sm hover:bg-gray-400 transition-colors"
                            onClick={() => {
                                setshowPopUp(false);
                                setLinkList(true);
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors"
                            onClick={(event) => {
                                handleSubmit(event);
                                setshowPopUp(false);
                                setLinkList(true);
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </form>


        )
    }

    return (
        <div className="mt-4 mx-4">

            {/* HEADER SECTION */}
            <div className="flex flex-wrap justify-between bg-blue-200 rounded-3xl py-4 px-6 items-center">
                <div className="flex flex-col">
                    <span className="text-sm text-gray-700">Your links are live here:</span>
                    <a href={`http://localhost:5173/${currentUser.userName}`} className="text-orange-600 hover:underline">
                        {`http://localhost:5173/${currentUser.userName}`}
                    </a>
                </div>
                <button className="px-4 py-2 bg-orange-600 text-white font-semibold text-sm rounded-full shadow-md hover:bg-orange-700 transition-colors">
                    Copy your Clicker URL
                </button>
            </div>

            {/* BUTTON SECTION */}
            <div className="flex flex-col max-w-[700px] mx-auto mt-6">
                <div className="flex gap-2 mb-4">
                    <button className="px-4 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-colors">Links</button>
                    <button className="px-4 py-2 bg-black text-white rounded-full shadow-md hover:bg-gray-800 transition-colors">Shop</button>
                </div>
                <div className="flex justify-center mb-4">
                    <button
                        className="w-full px-6 py-3 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition-colors"
                        onClick={() => {
                            setshowPopUp(true);
                            setLinkList(false);
                        }}
                    >
                        + Add link
                    </button>
                </div>
                <div className="flex justify-between items-center h-12 mb-4">
                    <div className="flex items-center text-gray-700 gap-2">
                        <MdOutlineViewHeadline className="text-lg" />
                        Add header
                    </div>
                    <NavLink to="../archived" className="flex items-center text-gray-700 gap-2 hover:text-blue-600">
                        <span>View archive</span>
                        <RxArchive className="text-lg" />
                    </NavLink>
                </div>

                {/* POPUP GOES HERE */}
                {showPopUp && <AddUrlPopUp />}

                {/* LINK CARD GOES FROM HERE */}
                {showLinkList && usersLinks && usersLinks.map((link, index) => (
                    <LinkCard props={link} key={index} onTrigger={handleTriggerFromChild} />
                ))}
            </div>
        </div>

    )
}

export default AddLinksPage