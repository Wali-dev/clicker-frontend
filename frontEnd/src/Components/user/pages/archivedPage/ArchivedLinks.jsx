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
        const fetchLinks = async () => {
            const response = await axios.get('http://localhost:8000/api/link', {
                params: { userName: "Mahi" }
            });

            //FILTERING LINKS IF THEY ARE DELETED AND ARCHIVED OR NOT
            const filteredLinks = await response.data.filter(item => item.archived === true && item.deleted === false)
            setUserslink(filteredLinks)
        }
        fetchLinks();
    }, [trigger])

    return (
        <div className="my-5">
            <NavLink to="../links">
                <div className="flex text-center items-center ml-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg>
                    <div>Go back</div>
                </div>
            </NavLink>
            <div className=" my-5">
                <div className="text-center font-light">Here are links that has been archived
                    <p className="font-medium">Click on the restore button active them</p>
                </div>
                <div className="mt-4">
                    {
                        usersLinks && usersLinks.map((link, index) => <ArchivedLinkCard key={index} props={link} onTrigger={triggerFunction} />)
                    }
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ArchivedLinks