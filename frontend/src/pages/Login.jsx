import React, { useState } from 'react'
import Header from '../component/Header'

const Login = () => {
  const [islogin, setIslogin] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    // if (fullname === '' && email === '' && password === '') {
    //   alert("please enter the details");
    // }
    // else {
    //   setIslogin(!islogin)
    // }
      setIslogin(!islogin)

  }

  const getinputData = (e) => {
    e.preventDefault();
    console.log(fullname, email, password)
    setFullname("");
    setEmail("");
    setPassword("")
  }

  return (
    <div>
      <Header />

      <div className="">

        <img className='w-[100vw] h-[100vh]' src="https://wallpapers.com/images/high/netflix-backgroung-gs7hjuwvv2g0e9fj.webp" alt="" />
      </div>

      <form onSubmit={getinputData} className="absolute top-10 left-0 right-0 flex item-center justify-center my-36 w-3/12 mx-auto flex-col bg-black opecity-70">

        <h1 className='text-3xl text-white mb-4 mt-5 font-bold'>{islogin ? "Login" : "Register"}</h1>

        <div className="flex items-center justify-center flex-col text=white">


          {!islogin && <>
            <label className='text-white m-2'>Full Name</label>
            <input type="text" className='outline-none p-3 rounded-sm bg-gray-800  text-white' value={fullname} onChange={(e) => setFullname(e.target.value)} />
          </>
          }

          <label className='text-white  m-2'>Email </label>
          <input type="email" className='outline-none p-3 rounded-sm bg-gray-800 text-white' value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className='text-white  m-2'>Password </label>
          <input type="password" className='outline-none p-3 rounded-sm bg-gray-800 text-white mb-4 ' value={password} onChange={(e) => setPassword(e.target.value)} />

          <p className='text-white'>{islogin ? "New to Netflix" : "Already have an account"} <span className='text-blue-500 cursor-pointer' onClick={loginHandler}>{islogin ? "Register" : "login"}</span></p>

          <button className='bg-red-800 text-white px-4 py-2 w-full' onClick={loginHandler}>{islogin ? "Login" : "Register"}</button>
        </div>

      </form>
    </div>
  )
}

export default Login
