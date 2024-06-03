import { Link } from 'react-router-dom';
import bgimg from '../assets/background_img.jpg'
import Footer from '../component/Footer';
import logo from './../assets/netflix_logo.png';

const Singin = () => {
    return (
        <>
            <div className="">
                <div className="absolute top-0 left-5 cursor-pointer">
                    <img src={logo} alt="" className='w-20 h-25 mx-5' />
                </div>
                <div

                    className="bg-cover bg-center h-screen flex items-center justify-center"
                    style={{ backgroundImage: `url(${bgimg})` }}
                >

                    <div className=" flex items-center justify-center flex-col px-10 py-10 bg-black mx-2 my-3">
                        <h1 className='text-left text-xl font-bold mb-3'>Sing in</h1>

                        <div className="flex items-center justify-center flex-col gap-4 ">
                            <input type="email" placeholder='Email id' />
                            <input type="password" placeholder='Password' />

                            <button className='bg-red-600 border w-full font-bold py-1 hover:bg-red-700'>Sing in</button>

                        </div>
                        <div className="flex items-center justify-center flex-col">
                            <p className='text-red-400 mt-4'>New to Netflix? <Link to="/singup" className='text-white underline'> sing up now</Link></p>

                            <p className='mt-1'>This page is protected by Google reCAPTCHA</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    )
}

export default Singin
