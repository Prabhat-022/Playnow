import logo from './../assets/netflix_logo.png';
import { UilSearch, UilBell, UilUserCircle, UilAlignJustify } from '@iconscout/react-unicons';

const Header = () => {

    return (
        <div className="">
            <div className="flex items-center justify-between">
                <div className="">
                    <img src={logo} alt="" className='w-20 h-25 mx-5' />
                </div>
                <div className="">
                    <ul className='flex  cursor-pointer px-1 text-xl font-bold mobile:hidden'>
                        <li className='ml-2 mr-2'>Home</li>
                        <li className='ml-2 mr-2'>TV Show</li>
                        <li className='ml-2 mr-2'>Movie</li>
                        <li className='ml-2 mr-2'>News & Popular</li>
                        <li className='ml-2 mr-2'>My List</li>
                    </ul>
                </div>
                <div className="flex  cursor-pointer mx-5">
                    <UilSearch color="white" className="ml-2" />
                    <UilBell color="white" className="ml-2" />
                    <UilUserCircle color="white" className="ml-2" />

                    <UilAlignJustify color="white" className="ml-2" />
                </div>

            </div>
        </div>

    )
}

export default Header
