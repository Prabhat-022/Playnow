import React from 'react';
import { IoIosArrowDropdown } from 'react-icons/io'
import { useDispatch, useSelector } from 'react-redux';
// import { API_END_POINT } from '../utils/constant';
import axios from 'axios';
import { setUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { gettoggle } from '../redux/moviesSlice';
const API_END_POINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8000';

const Header = () => {
    const user = useSelector((store) => store.app.user)

    // const user = useSelector((store) => store.user.user)
    const toggle = useSelector((store) => store.movie.toggle)

    const dispatch = useDispatch()
    const navigate = useNavigate()
    // console.log('useremail', user.email)
    // console.log('users', user.fullName)
    // console.log(user.email)
    // const user = null;

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${API_END_POINT}/api/v1/user/logout`);
            console.log(res)

            if (res.data.success) {
                toast.success(res.data.message)
            }

            dispatch(setUser(null))
            navigate('/')
        } catch (error) {

            console.log(error)
        }
    }

    const togglehandler = () => {
        dispatch(gettoggle())
    }

    return (
        <div className=" flex w-[100%] items-center justify-between px-6 bg-gradient-to-b from-black absolute">

            <img className='w-48 h-10 mt-2' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="" />

            {
                user && (
                    <div className="flex items-center ">
                        <IoIosArrowDropdown size="24px" color='white' />

                        <h1 className='text-lg font-medium text-white'>Prabhat</h1>
                        <div className="ml-4 mt-2">

                            <button className='bg-red-800 text-white px-4 py-2' onClick={logoutHandler}>Logout</button>

                            <button className='bg-red-800 text-white px-4 py-2 ml-2' onClick={togglehandler}>{toggle ?"Home" :  "Search"}</button>

                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Header
