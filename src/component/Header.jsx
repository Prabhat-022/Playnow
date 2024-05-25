import logo from './../assets/netflix_logo.png';
import { UilSearch, UilBell, UilUserCircle } from '@iconscout/react-unicons';

const Header = () => {
    return (
        <div className="">
            <div className="flex items-center justify-between">
                <div className="">
                    <img src={logo} alt="" className='w-10 h-18' />
                </div>
                <div className="">
                    <ul className='flex  cursor-pointer px-1'>
                        <li className='ml-2 mr-2'>Home</li>
                        <li className='ml-2 mr-2'>TV Show</li>
                        <li className='ml-2 mr-2'>Movie</li>
                        <li className='ml-2 mr-2'>News & Popular</li>
                        <li className='ml-2 mr-2'>My List</li>
                    </ul>
                </div>
                <div className="flex mx-2 cursor-pointer ">
                    <UilSearch color="white" className="ml-2" />
                    <UilBell color="white" className="ml-2"/>
                    <UilUserCircle color="white" className="ml-2"/>
                </div>
            </div>
        </div>
    )
}

export default Header
