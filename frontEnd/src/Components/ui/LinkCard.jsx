
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
        <div className="sm:mt-4">
            <div className="w-full rounded-3xl my-4 h-36 grid grid-cols-12 relative bg-slate-50">   {/*this is the section is devided into two drag button and rest of the body */}
                <div className=" col-span-1 my-auto text-2xl"><RxDragHandleDots2 /></div> {/* drag icon*/}
                <div className="col-span-11 my-auto">  {/* rest of the body*/}
                    <div className="flex items-center justify-between "> {/* title, link edit button and share+active button*/}
                        <div className=""> {/* title link edit block*/}
                            <div className="flex items-center font-semibold">{!textBox && link_title && link_title}
                                {textBox &&
                                    //  <input type="text" name='title' id='title' defaultValue={link_title} onChange={() => { handleChange(event) }}></input>
                                    <div className="flex">
                                        <input
                                            // ref={inputRef}
                                            type="text"
                                            name="title"
                                            id="title"
                                            defaultValue={link_title && link_title}
                                            onChange={handleChange}
                                        />
                                        <TiTick className="text-2xl rounded text-green-300  hover:bg-green-900" onClick={() => { handleSave() }} />
                                        <MdOutlineCancel className="text-md rounded p-3 text-red-600 hover:bg-red-700" onClick={() => { setTextBox(false) }} />
                                    </div>
                                }
                                <FiEdit2 className="ml-3" onClick={() => { setTextBox(true); }} />
                            </div>
                            <div className="flex items-center font-semibold w-auto text-wrap">{!textBox2 && actual_link && (actual_link.length > 30 ? actual_link.slice(0, 25) + '...' : actual_link)}
                                {textBox2 &&
                                    <div className="flex">
                                        <input
                                            type="text"
                                            name="link"
                                            id="link"
                                            defaultValue={actual_link}
                                            onChange={handleChange2}
                                            className="w-60"
                                        />
                                        <TiTick className="text-2xl rounded text-green-300  hover:bg-green-900" onClick={() => { handleSave2() }} />
                                        <MdOutlineCancel className="text-md rounded p-3 text-red-600 hover:bg-red-700" onClick={() => { setTextBox2(false) }} />
                                    </div>
                                }
                                <FiEdit2 className="ml-3" onClick={() => { setTextBox2(true); }} />
                            </div>
                        </div>
                        <div className="flex mr-8"> {/* share + active toggle*/}
                            <button><RxShare2 className="text-xl mr-2" /></button>
                            <input type="checkbox" className="toggle toggle-sm" checked={isChecked} onChange={() => {
                                handleToggle(link_id, "active")
                            }} />
                        </div>
                    </div>
                    <div className="mt-4 flex flex-wrap shrink gap-2 text-lg font-thin mx-2" > {/* action buttons*/}
                        <button><AiOutlineLayout /></button>
                        <button><MdOutlineWallpaper /></button>
                        <button><MdOutlineSchedule /></button>
                        <button>< IoMdLock /></button>
                        <button><IoAnalytics /></button>
                        <button onClick={() => { handleUpdate(props.props.link_id, "archive") }} ><RxArchive /></button>
                        <button className="absolute right-12 text-2xl rounded hover:bg-red-600 hover:text-white" onClick={() => { setTextBoxValue(link_title); handleUpdate(props.props.link_id, "delete") }}><MdOutlineDeleteOutline /></button>
                    </div >
                </div >
            </div >

        </div >

    )
}

export default LinkCard