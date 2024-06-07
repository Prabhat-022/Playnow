import { useState } from 'react';
import logo from './../assets/netflix_logo.png';
import { UilSearch, UilBell, UilUserCircle, UilAlignJustify } from '@iconscout/react-unicons';
import './../App.css';
import Sidebar from './Sidebar';

const Header = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showInput, setShowInput] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const searchHandle = () => {
        setShowInput(!showInput);
    }

    return (
        <div className="w-[100vw] bg-gradient-to-b from-black">
            <div className="flex items-center justify-between">
                <div className="">
                    <img src={logo} alt="" className='w-20 h-25 mx-5' />
                </div>
                <div className="">
                    <ul className='flex  cursor-pointer px-1 text-xl font-bold mobile:hidden '>
                        <li className='ml-2 mr-2'>Home</li>
                        <li className='ml-2 mr-2'>TV Show</li>
                        <li className='ml-2 mr-2'>Movie</li>
                        <li className='ml-2 mr-2'>News & Popular</li>
                        <li className='ml-2 mr-2'>My List</li>
                    </ul>
                </div>
                <div className="flex  cursor-pointer mx-5 items-center">
                    <div className='flex'>
                        {/* Button to toggle input box */}

                        {showInput && (
                            <input type="text" className="border bg-transparent px-2" />
                        )}
                        
                        <UilSearch color="white" className="ml-2" onClick={searchHandle} />
                    </div>

                    {/* <UilSearch color="white" className="ml-2" onClick={searchhandle()} /> */}
                    <UilBell color="white" className="ml-2" />
                    <UilUserCircle color="white" className="ml-2" />
                    <div className="App">
                        <UilAlignJustify color="white" className=" openbtn ml-2 hidden mobile:block" onClick={toggleSidebar} />
                        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    </div>

                </div>

            </div>
        </div>

    )
}

export default Header
