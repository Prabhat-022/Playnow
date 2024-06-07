/* eslint-disable react/no-unescaped-entities */
import homeimg from './../assets/top_img.jpg';
import { UilPlay, UilInfoCircle } from '@iconscout/react-unicons'

const Tailor = () => {
    return (
        <>
            <div className="">
                <div className="w-full h-[50%]">
                    <div className="">
                        <img src={homeimg} alt="" className='h-[70vh] w-[100%] ' />
                    </div>
                    <div className="absolute bottom-44 ">
                        <h1 className='text-4xl font-bold mb-2'>Kingdom of the Planet of the Apes
                        </h1>
                        <p className='text-xl'>  Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced t...</p>

                        <div className="flex mx-3 my-4">
                            <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded flex mr-3">
                                <UilPlay className="" />Play
                            </button>
                            <button className="bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded flex">
                                <UilInfoCircle />More Info
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Tailor;
