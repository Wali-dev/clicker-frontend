import axios from "axios";


const ArchivedLinkCard = (props) => {

    const onTrigger = props.onTrigger();
    const { link_id, link_title, actual_link, updatedAt, userName } = props.props;

    const handleUpdate = async (id, param) => {

        //SETTING PARAMETERS FOR UPDATING PROPERTIES
        const link_id = id;
        const operation = param;

        if (operation === 'delete') {
            const update = {
                deleted: true
            }

            //CONFIG IS USED TO SEND QUERY PARAMS
            const config = {
                params: {
                    userName,
                    link_id
                }
            };
            const updateDelete = async () => {
                await axios.patch("http://localhost:8000/api/link", update, config)
                    .then(response => {
                        console.log(response.data)
                    })
            }
            await updateDelete();

        }
        if (operation === 'active') {
            const update = {
                archived: false
            }

            //CONFIG IS USED TO SEND QUERY PARAMS
            const config = {
                params: {
                    userName,
                    link_id
                }
            };
            const updateActiveStatus = async () => {
                await axios.patch("http://localhost:8000/api/link", update, config)
                    .then(response => {
                        console.log(response.data)
                    })
            }
            await updateActiveStatus();
        }
    }

    return (
        <div className="flex flex-col flex-wrap">
            <div className="bg-slate-200 m-2 mx-4 p-4 flex relative rounded-lg shadow-lg">
                <div className="flex-1">
                    <div className="text-lg font-semibold mb-2">{link_title}</div>
                    <div className="text-sm mb-2">
                        <a href={actual_link} className="text-blue-600 hover:underline">
                            {actual_link.length > 50 ? `${actual_link.slice(0, 50)}...` : actual_link}
                        </a>
                    </div>
                    <div className="text-xs text-gray-600">Last updated: {updatedAt.slice(0, 10)}</div>
                </div>
                <div className="flex items-center space-x-2 absolute right-4 top-1/2 transform -translate-y-1/2">
                    <div
                        className="p-2 bg-green-500 rounded-md hover:bg-green-600 cursor-pointer transition-colors duration-300"
                        onClick={() => {
                            handleUpdate(link_id, "active");
                            onTrigger();
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </div>
                    <div
                        className="p-2 bg-red-500 rounded-md hover:bg-red-600 cursor-pointer transition-colors duration-300"
                        onClick={() => {
                            handleUpdate(link_id, "delete");
                            onTrigger();
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArchivedLinkCard