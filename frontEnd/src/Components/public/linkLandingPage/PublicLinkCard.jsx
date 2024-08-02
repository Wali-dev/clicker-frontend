
const PublicLinkCard = (props) => {
    const { userName, link_id, actual_link, link_title } = props.props;
    const handleShare = () => {
        console.log("hii")
    }
    const handleOp = () => {
        console.log("bye")
    }
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6 px-2">
            <div className="grid grid-cols-12 items-center h-16">
                <a href={actual_link} target="_blank" className="col-span-11 text-xs sm:text-sm md:text-base lg:text-lg overflow-y-auto max-h-14 px-4 py-2 text-center hover:cursor-pointer" onClick={handleOp}>
                    {link_title}
                </a>
                <div className="col-span-1 flex justify-center hover:cursor-pointer hover:text-orange-600" onClick={handleShare}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default PublicLinkCard