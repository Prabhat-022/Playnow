
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { registerUser } from '../redux/userSlice.js';
import Footer from '../component/footer/Footer.jsx';
import Faq from '../component/Frequently_ask_question/Faq.jsx';
import { Link } from 'react-router-dom';

const Register = () => {
    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: ""
    })
    const dispatch = useDispatch();


    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            dispatch(registerUser(user))
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <div className="w-screen">
                <div className="">
                    <div className="">
                        <img className='w-[100vw] h-[100vh] opacity-80' src="https://wallpapers.com/images/high/netflix-backgroung-gs7hjuwvv2g0e9fj.webp" alt="" />
                        <img className='w-48 h-10 absolute top-2 left-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="" />
                    </div>
                    <form onSubmit={handleRegister} className="absolute top-10 left-0 right-0 flex item-center justify-center my-36 w-3/12 mx-auto flex-col bg-black opecity-70">

                        <h1 className='text-3xl text-white mb-4 mt-5 font-bold'>Register</h1>

                        <div className="flex items-center justify-center flex-col text=white">



                            <label className='text-white m-2'>Full Name</label>
                            <input type="text" className='outline-none p-3 rounded-sm bg-gray-800  text-white' value={user.fullName} onChange={(e) => setUser({ ...user, fullName: e.target.value })} />


                            <label className='text-white  m-2'>Email </label>
                            <input type="email" className='outline-none p-3 rounded-sm bg-gray-800 text-white' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />

                            <label className='text-white  m-2'>Password </label>
                            <input type="password" className='outline-none p-3 rounded-sm bg-gray-800 text-white mb-4 ' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />

                            <p className='text-white cursor-pointer my-4'>Already have an account <span className='text-blue-500 cursor-pointer' >

                                <Link to="/">
                                    Login
                                </Link></span></p>

                            <button className='bg-red-800 text-white px-4 py-2 w-full cursor-pointer' type="submit">Register </button>

                        </div>

                    </form>
                </div>
                <Faq />

                <Footer />

            </div>


        </>
    )
}

export default Register
