import React, { useState } from 'react'
import Header from '../component/Header'
import axios from 'axios'
// import { API_END_POINT } from '../utils/constant';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/userSlice.js';
import Footer from '../component/footer/Footer.jsx';
import Faq from '../component/Frequently_ask_question/Faq.jsx';
const API_END_POINT = process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8000/api/v1/user';

const Login = () => {
  const [islogin, setIslogin] = useState(false);
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    // if (fullname === '' && email === '' && password === '') {
    //   alert("please enter the details");
    // }
    // else {
    //   setIslogin(!islogin)
    // }

    setIslogin(!islogin)

  }

  const getinputData = async (e) => {
    e.preventDefault();
    console.log("islogin", !islogin)

    if (!islogin) {
      //login
      const user = { email, password }
      try {
        setIsloading(true)

        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });

        console.log('config.data', res.config.data)

        if (res.data.success) {
          toast.success(res.data.message)
          setIsloading(false);

        }

        dispatch(setUser(res.config.data))
        navigate("/browse");

      } catch (error) {

        setIsloading(false)
        // toast.error(error.response.data.message)
        console.log("user not login:", error)
      }

    }
    else {
      //register
      const user = { fullName, email, password }
      try {
        setIsloading(true)
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        });
        console.log('register res', res)

        if (res.data.success) {
          toast.success(res.data.message)
          setIsloading(false)

        }
        // dispatch(setUser(res.config.data))



      } catch (error) {
        setIsloading(false)
        toast.error(error.response.data.message)
        console.log("user not register:", error)
      }
    }
    // console.log(fullname, email, password)
    // setFullname("");
    // setEmail("");
    // setPassword("")
  }

  return (
    <>
      <div className="w-screen">
        <Header />
        <div className="">
          <div className="">

            <img className='w-[100vw] h-[100vh]' src="https://wallpapers.com/images/high/netflix-backgroung-gs7hjuwvv2g0e9fj.webp" alt="" />
          </div>

          <form onSubmit={getinputData} className="absolute top-10 left-0 right-0 flex item-center justify-center my-36 w-3/12 mx-auto flex-col bg-black opecity-70">

            <h1 className='text-3xl text-white mb-4 mt-5 font-bold'>{islogin ? "Login" : "Register"}</h1>

            <div className="flex items-center justify-center flex-col text=white">


              {!islogin && <>
                <label className='text-white m-2'>Full Name</label>
                <input type="text" className='outline-none p-3 rounded-sm bg-gray-800  text-white' value={fullName} onChange={(e) => setFullname(e.target.value)} />
              </>
              }

              <label className='text-white  m-2'>Email </label>
              <input type="email" className='outline-none p-3 rounded-sm bg-gray-800 text-white' value={email} onChange={(e) => setEmail(e.target.value)} />

              <label className='text-white  m-2'>Password </label>
              <input type="password" className='outline-none p-3 rounded-sm bg-gray-800 text-white mb-4 ' value={password} onChange={(e) => setPassword(e.target.value)} />

              <p className='text-white cursor-pointer'>{islogin ? "New to Netflix" : "Already have an account"} <span className='text-blue-500 cursor-pointer' onClick={loginHandler}>{islogin ? "Register" : "login"}</span></p>

              <button className='bg-red-800 text-white px-4 py-2 w-full cursor-pointer' onClick={loginHandler}>{isloading ? "loading.." : `${islogin ? "Login" : "Register"}`} </button>
            </div>

          </form>
        </div>
        <Faq />
        <Footer />

      </div>


    </>
  )
}

export default Login
