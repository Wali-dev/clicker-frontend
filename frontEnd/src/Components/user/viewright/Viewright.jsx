import { AiOutlineBell } from "react-icons/ai"

const Viewright = () => {
    const userName = 'hii'
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-200">
            <div className="bg-green-500 w-[375px] h-[667px] rounded-[50px] overflow-hidden shadow-lg flex flex-col">
                <div className="w-full flex-grow flex flex-col p-6">

                    {/* HEADER */}
                    <div className="sticky top-0 z-10">
                        <div className="flex justify-between items-center bg-white bg-opacity-70 backdrop-blur-sm rounded-[50px] px-8 py-3 m-1 shadow-md transition-all duration-300">
                            <button className="btn rounded-3xl w-12 btn-md flex items-center justify-center hover:bg-orange-400">...</button>
                            <button className="btn rounded-full flex items-center justify-center sm:text-md px-6 py-3 transition-all duration-100 hover:scale-105 hover:bg-orange-400 hover:shadow-lg group">
                                <span className="flex items-center justify-center gap-3">
                                    <span className="inline-flex items-center">Subscribe</span>
                                    <AiOutlineBell className="text-xl sm:text-xl transform group-hover:rotate-45 transition-transform duration-100 inline-flex" />
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* PROFILE PICTURE AND USER NAME */}
                    <div className="flex items-center justify-center mt-10 mb-8">
                        <div className="w-24 h-24 rounded-full overflow-hidden mr-4">
                            <img src="https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.u" alt={userName} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-2xl font-bold text-white">@{userName}</div>
                    </div>

                    {/* LINK CARDS */}


                    {/* FOOTER */}
                    <div className="mt-9 mb-4 flex justify-center w-full">
                        <button className="btn rounded-full text-xs sm:text-sm md:text-base w-full max-w-xs">
                            Join @{userName} at Clicker
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewright