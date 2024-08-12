import axios from "axios";
import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import ArchivedLinkCard from "../../../ui/ArchivedLinkCard";



const ArchivedLinks = () => {

    //SETTIGN UP TRIGGER TO GIVE REAL TIME UPDATE
    const [trigger, setTrigger] = useState(true);
    const triggerFunction = () => {
        setTrigger(!trigger);
        console.log(trigger);
    }

    //DATA FETCHING FOR THE LINKS
    const [usersLinks, setUserslink] = useState();

    useEffect(() => {
        const userName = sessionStorage.getItem('userName');
        const fetchLinks = async () => {
            const response = await axios.get('http://localhost:8000/api/link', {
                params: { userName }
            });

            //FILTERING LINKS IF THEY ARE DELETED AND ARCHIVED OR NOT
            const filteredLinks = await response.data.filter(item => item.archived === true && item.deleted === false)
            setUserslink(filteredLinks)
        }
        fetchLinks();
    }, [trigger])

    return (
        <div className="my-8 mx-4">
            <NavLink to="../links" className="flex items-center text-gray-600 hover:text-gray-800 transition-colors duration-300 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                </svg>
                <span className="text-lg font-semibold">Go back</span>
            </NavLink>

            <div className="text-center mb-8">
                <h2 className="text-xl font-light mb-2">Here are the links that have been archived</h2>
                <p className="text-base font-medium text-gray-700">Click on the restore button to activate them</p>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {usersLinks && usersLinks.map((link, index) => (
                    <ArchivedLinkCard key={index} props={link} onTrigger={triggerFunction} />
                ))}
            </div>
        </div>
    )
}

export default ArchivedLinks