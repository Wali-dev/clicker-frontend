import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useParams } from 'react-router-dom';

const PublicPage = () => {
    const params = useParams();
    const userName = params.userName;

    const [userDisplayLink, setUserDisplayLink] = useState();

    useEffect(() => {
        const fetchLinks = async () => {
            const response = await axios.get('http://localhost:8000/api/link', {
                params: { userName }
            });

            //FILTERING LINKS IF THEY ARE ACTIVE NOT DELETED OR ARCHIVED
            const filteredLinks = await response.data.filter(item => item.deleted === false && item.archived === false && item.active === true);
            setUserDisplayLink(filteredLinks);
        }
        fetchLinks();
    }, []);

    console.log(userDisplayLink);
    return (

        <div className="bg-green-500 h-screen w-screen grid sm:grid-cols-1 justify-items-center">
            <div className="flex justify-around sm:justify-between items-center mt-9 bg-white bg-opacity-70 flex-shrink  sm:w-[700px] h-16 sm:h-16 rounded-[35px] px-4">
                <div className='btn rounded-3xl w-12  font-bold'>...</div>
                <div className="btn rounded-3xl">Subscribe <AiOutlineBell className="text-xl" /></div>
            </div>
            <div>

                <div className="grid grid-cols-12 items-center bg-white sm:w-[600px] sm:h-16 text-center">
                    <div className=" sm:col-span-11 text-xl ">{"Tis is the link fot jdksa kasdka lakdlas ldslsa lasda ladm"}</div>
                    <div className=" sm:col-span-1 hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>
                    </div>
                </div>

            </div>
            <div>
                <button className="btn btn-wide rounded-3xl flex-shrink">Join @{userName} at Clicker</button>
            </div>
        </div>

    )
}

export default PublicPage