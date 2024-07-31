
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

import axios from "axios";
import { useState, useRef, useEffect } from "react";



const LinkCard = (props) => {

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
            // onTrigger();
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
        }
    }

    //SHOW TEXT EDIT FIELD
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
                                            // defaultValue={textBoxValue && textBoxValue.title}
                                            onChange={handleChange}
                                        />
                                        <TiTick className="text-2xl rounded text-green-300  hover:bg-green-900" onClick={() => { handleSave() }} />
                                    </div>
                                }
                                <FiEdit2 className="ml-3" onClick={() => { setTextBox(true); }} />
                            </div>
                            <div className="flex items-center font-semibold">{actual_link}
                                <FiEdit2 className="ml-3" />
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
                        <button><LiaDirectionsSolid /></button>
                        <button><MdOutlineWallpaper /></button>
                        <button><MdOutlineSchedule /></button>
                        <button>< IoMdLock /></button>
                        <button><IoAnalytics /></button>
                        <button className="absolute right-12" onClick={() => { setTextBoxValue(link_title); handleUpdate(props.props.link_id, "delete") }}><MdOutlineDeleteOutline /></button>
                    </div >
                </div >
            </div >

        </div >

    )
}

export default LinkCard