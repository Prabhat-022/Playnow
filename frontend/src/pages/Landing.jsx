import logo from './../assets/netflix_logo.png';
import loginImg from './../assets/login_img.jpg';
import Footer from './../component/Footer.jsx'
import { Link } from 'react-router-dom';


const Landing = () => {
    return (
        <>
            <div className="">
                <div className="absolute top-0">
                   <Link to="/"> <img src={loginImg} alt="" /></Link>
                </div>
                <div className="flex items-center justify-between relative">
                    <div className="">
                        <img src={logo} alt="" className='w-20 h-25 mx-5' />
                    </div>
                    <div className="mr-4">
                        <select className='w-20 border mr-4' >
                            <option value="Hindi">Hindi</option>
                            <option value="English">English</option>
                            <option value="German">German</option>
                            <option value="Korean">Korean</option>
                        </select>
                        <button className='bg-red-600 border px-2 font-bold'><Link to="/singup"> Sing up</Link></button>
                    </div>

                </div>


                <div className="relative top-10">

                    <div className="flex items-center justify-center flex-col ">
                        <h1 className='text-3xl font-bold'>Unlimited movies, TV shows and more</h1>
                        <p className='text-xl font-bold '>Watch anywhere. Cancel anytime.</p>
                        <p className='font-bold'>Ready to watch? Enter your email to create or restart your membership.</p>
                    </div>
                    <div className=" mt-5 flex items-center justify-center pointer ">
                        <input type="text" placeholder='Email address' className='border px-6 py-2.5 mr-5' />
                        <button className='bg-red-700 border px-6 py-2 text-xl font-bold hover:bg-red-600 placeholder:text-red-600'>Get Started  </button>
                    </div>
                </div>
              

            </div>
            <Footer />
        </>
    )
}

export default Landing
