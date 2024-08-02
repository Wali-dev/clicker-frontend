import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineBell } from "react-icons/ai";

import { useParams } from 'react-router-dom';
import PublicLinkCard from "./PublicLinkCard";

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

    return (
        <div className="bg-green-500 min-h-screen w-full flex flex-col">
            <div className="w-full max-w-2xl mx-auto flex-grow flex flex-col p-6">

                {/* HEADER GOES FROM HERE */}
                <div className="sticky top-0 z-10">
                    <div className="max-w-2xl mx-auto">
                        <div className="flex justify-between items-center bg-white bg-opacity-70 backdrop-blur-sm rounded-[50px] px-8 py-3 m-1 shadow-md transition-all duration-300">
                            <button className=" btn rounded-3xl w-12 btn-md flex items-center justify-center hover:bg-orange-400">...</button>
                            <button className="btn rounded-full flex items-center justify-center  sm:text-md px-6 py-3 transition-all duration-100 hover:scale-105 hover:bg-orange-400 hover:shadow-lg group">
                                <span className="flex items-center justify-center gap-3">
                                    <span className="inline-flex items-center">Subscribe</span>
                                    <AiOutlineBell className="text-xl sm:text-xl transform group-hover:rotate-45 transition-transform duration-100 inline-flex" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* PROFILE PICTURE AND USER NAME GOES FROM HERE */}
                <div className="flex items-center justify-center mt-10 mb-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                        <img src={"https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.u"} alt={userName} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-2xl font-bold text-white">@{userName}</div>
                </div>

                {/* LINK CARDS GOES FROM HERE */}
                <div>
                    {
                        userDisplayLink && userDisplayLink.map((link, index) => <PublicLinkCard props={link} key={index} />)
                    }
                </div>
                {/* FOOTER GOES FORM HERE */}
                <div className="mt-9 mb-4 flex justify-center w-full">
                    <button className="btn rounded-full text-xs sm:text-sm md:text-base w-full max-w-xs">
                        Join @{userName} at Clicker
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PublicPage