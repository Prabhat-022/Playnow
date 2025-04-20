import React from 'react';
import { IoIosArrowDropdown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
import { gettoggle } from '../redux/moviesSlice';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { user } = useSelector((store) => store.user)
    const toggle = useSelector((store) => store.movie.toggle)

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const logoutHandler = async () => {
        try {
            dispatch(logout())
        } catch (error) {
            console.log("Error in logout controller", error.message)
        }
    }

    const togglehandler = () => {
        dispatch(gettoggle())
    }





    return (
        <>
            <div className=" flex w-[100%] items-center justify-between px-10 py-5 bg-black ">

                <img className='w-48 h-10 mt-2 ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="" />
                {
                    user && (
                        <div className="flex items-center justify-center cursor-pointer" onClick={() => navigate('/profile')}>
                            <IoIosArrowDropdown size="24px" color='white' />

                            <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
                            <div className="ml-4 mt-2">


                                <button className='bg-red-800 text-white px-4 py-2 ' onClick={togglehandler}>{toggle ? "Home" : "Search"}</button>
                                <button className='bg-red-800 text-white px-4 py-2 ml-2' onClick={logoutHandler}>Logout</button>

                            </div>
                        </div>
                    )
                }
            </div>
        </>

    )
}

export default Header
