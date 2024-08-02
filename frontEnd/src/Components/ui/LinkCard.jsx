
import { FiEdit2 } from "react-icons/fi";
import { RxDragHandleDots2 } from "react-icons/rx";
import { AiOutlineLayout } from "react-icons/ai";
import { LiaDirectionsSolid } from "react-icons/lia";
import { MdOutlineWallpaper } from "react-icons/md";
import { MdOutlineSchedule } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { IoAnalytics } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { RxShare2 } from "react-icons/rx";
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";

import { RxArchive } from "react-icons/rx";

import axios from "axios";
import { useState, useRef, useEffect } from "react";



const LinkCard = (props) => {

    //DEFINGING THE TRIGGER FROM THE PROPS SO THAT CAN IT LATER
    const onTrigger = props.onTrigger;
    const { userName, link_id, actual_link, link_title, active } = props.props;

    const handleUpdate = async (id, param, status) => {

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
            onTrigger();

        }
        if (operation === 'titleUpdate') {
            const update = {
                link_title: textBoxValue
            }

            //CONFIG IS USED TO SEND QUERY PARAMS
            const config = {
                params: {
                    userName,
                    link_id
                }
            };
            const updateTitle = async () => {
                await axios.patch("http://localhost:8000/api/link", update, config)
                    .then(response => {
                        console.log(response.data)
                    })
            }
            await updateTitle();
            onTrigger();
        }
        if (operation === 'linkUpdate') {
            const update = {
                actual_link: textBoxValue2
            }

            //CHCECKING IF UPDATED LINK STARTS WITH PROPER HEADER OR NOT
            if (!update.actual_link.startsWith("http")) {
                update.actual_link = "https://" + update.actual_link;
            }
            //CONFIG IS USED TO SEND QUERY PARAMS
            const config = {
                params: {
                    userName,
                    link_id
                }
            };
            const updateLink = async () => {
                await axios.patch("http://localhost:8000/api/link", update, config)
                    .then(response => {
                        console.log(response.data)
                    })
            }
            await updateLink();
            onTrigger();
        }
        if (operation === 'active') {
            const update = {
                active: status
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
            onTrigger();

        }
        if (operation === 'deactive') {
            const update = {
                active: status
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
            onTrigger();
        }
        if (operation === 'archive') {
            const update = {
                archived: true
            }
            //CONFIG IS USED TO SEND QUERY PARAMS
            const config = {
                params: {
                    userName,
                    link_id
                }
            };
            const updateArchiveStatus = async () => {
                await axios.patch("http://localhost:8000/api/link", update, config)
                    .then(response => {
                        console.log(response.data)
                    })
            }
            await updateArchiveStatus();
            onTrigger();
        }
    }

    //HANDLE LINK TITLE EDIT
    const [textBox, setTextBox] = useState(false);
    const [textBoxValue, setTextBoxValue] = useState(link_title);
    // const inputRef = useRef(null);

    // useEffect(() => {
    //     if (textBox) {
    //         inputRef.current.focus();
    //     }
    // }, [textBox]);
    // const handleEdit = async () => {
    //     setTextBox(true);
    // };
    const handleChange = async (e) => {
        setTextBoxValue(e.target.value)
    };
    const handleSave = async () => {
        setTextBox(false);

        //LOGIC FOR SAVING THE TITLE CHANGE
        if (textBoxValue) {
            await handleUpdate(link_id, 'titleUpdate');
        }
        // await handleUpdate(link_id, 'titleUpdate');
    };
    // const handleClickOutside = (e) => {
    //     if (inputRef.current && !inputRef.current.contains(e.target)) {
    //         handleSave();
    //     }
    // };
    // useEffect(() => {
    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, []);

    //HANDLE ACTUAL LINK EDIT
    const [textBox2, setTextBox2] = useState(false);
    const [textBoxValue2, setTextBoxValue2] = useState(actual_link);

    const handleChange2 = async (e) => {
        setTextBoxValue2(e.target.value)
    };
    const handleSave2 = async () => {
        setTextBox2(false);

        // LOGIC FOR SAVING THE ACTUAL LINK CHANGE
        if (textBoxValue2) {
            await handleUpdate(link_id, 'linkUpdate');
        }
    };

    //HANDLE IF THE LINKS ARE ACTIVE OR NOT 
    const [isChecked, setIsChecked] = useState(active);

    const handleToggle = async (id, op) => {
        setIsChecked(!isChecked);
        callUpdate(id, op, !isChecked);
    };
    const callUpdate = async (id, op, status) => {
        if (!status) {
            const opp = "deactive";
            handleUpdate(id, opp, status);
        } else {
            handleUpdate(id, op, status);
        }
    }

    return (
        <div className="sm:mt-6">
            <div className="w-full rounded-2xl my-4 h-40 grid grid-cols-12 bg-gray-100 shadow-lg overflow-hidden">
                {/* DRAG ICONS GOES HERE */}
                <div className="col-span-1 flex items-center justify-center text-2xl text-gray-600">
                    <RxDragHandleDots2 />
                </div>

                {/* BODY */}
                <div className="col-span-11 flex flex-col sm:p-4">
                    {/* TITLE AND LINK SECTION */}
                    <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center mb-0 sm:mb-4">
                        <div className="flex flex-col w-full">
                            {/* TITLE */}
                            <div className="flex items-center font-semibold text-lg mb-2">
                                {!textBox && link_title && <span>{link_title}</span>}
                                {textBox && (
                                    <div className="flex items-center border-b border-gray-300 pb-1">
                                        <input
                                            type="text"
                                            name="title"
                                            id="title"
                                            defaultValue={link_title}
                                            onChange={handleChange}
                                            className="border rounded-lg px-2 py-1 mr-2 focus:outline-none"
                                        />
                                        <TiTick
                                            className="text-2xl text-green-500 hover:bg-green-100 rounded p-1 cursor-pointer"
                                            onClick={() => handleSave()}
                                        />
                                        <MdOutlineCancel
                                            className="text-2xl text-red-600 hover:bg-red-100 rounded p-1 cursor-pointer"
                                            onClick={() => setTextBox(false)}
                                        />
                                    </div>
                                )}
                                <FiEdit2
                                    className="ml-3 text-blue-500 cursor-pointer hover:text-blue-700"
                                    onClick={() => setTextBox(true)}
                                />
                            </div>

                            {/* LINK INPUT */}
                            <div className="flex items-center font-semibold text-lg">
                                {!textBox2 && actual_link && (
                                    <span>
                                        {actual_link.length > 30 ? `${actual_link.slice(0, 30)}...` : actual_link}
                                    </span>
                                )}
                                {textBox2 && (
                                    <div className="flex items-center border-b border-gray-300 pb-1">
                                        <input
                                            type="text"
                                            name="link"
                                            id="link"
                                            defaultValue={actual_link}
                                            onChange={handleChange2}
                                            className="border rounded-lg px-2 py-1 mr-2 w-60 focus:outline-none"
                                        />
                                        <TiTick
                                            className="text-2xl text-green-500 hover:bg-green-100 rounded p-1 cursor-pointer"
                                            onClick={() => handleSave2()}
                                        />
                                        <MdOutlineCancel
                                            className="text-2xl text-red-600 hover:bg-red-100 rounded p-1 cursor-pointer"
                                            onClick={() => setTextBox2(false)}
                                        />
                                    </div>
                                )}
                                <FiEdit2
                                    className="ml-3 text-blue-500 cursor-pointer hover:text-blue-700"
                                    onClick={() => setTextBox2(true)}
                                />
                            </div>
                        </div>

                        {/* SHARE LINK + ACTIVE TOGGLE */}
                        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                            <button className="p-2 text-gray-600 hover:text-gray-800">
                                <RxShare2 className="text-xl" />
                            </button>
                            <input
                                type="checkbox"
                                className="toggle toggle-sm"
                                checked={isChecked}
                                onChange={() => handleToggle(link_id, "active")}
                            />
                        </div>
                    </div>

                    {/* ACTION BUTTONS */}
                    <div className="flex flex-wrap gap-2 text-lg sm:mb-4">
                        <button className="p-2 rounded hover:bg-gray-200 transition-colors">
                            <AiOutlineLayout />
                        </button>
                        <button className="p-2 rounded hover:bg-gray-200 transition-colors">
                            <MdOutlineWallpaper />
                        </button>
                        <button className="p-2 rounded hover:bg-gray-200 transition-colors">
                            <MdOutlineSchedule />
                        </button>
                        <button className="p-2 rounded hover:bg-gray-200 transition-colors">
                            <IoMdLock />
                        </button>
                        <button className="p-2 rounded hover:bg-gray-200 transition-colors">
                            <IoAnalytics />
                        </button>
                        <button
                            className="p-2 rounded hover:bg-gray-200 transition-colors"
                            onClick={() => handleUpdate(props.props.link_id, "archive")}
                        >
                            <RxArchive />
                        </button>
                        <button
                            className="text-2xl text-red-600 rounded hover:bg-red-600 hover:text-white transition-colors"
                            onClick={() => { setTextBoxValue(link_title); handleUpdate(props.props.link_id, "delete"); }}
                        >
                            <MdOutlineDeleteOutline />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LinkCard