import React from 'react'

const Videotitle = ({ title, overview }) => {
    return (
        <>
            <div className="">
                <div className="absolute text-white top-48 flex flex-col flex-wrap w-[40%] mt-32 ">
                    <h1 className='text-4xl font-bold'> {title}</h1>
                    <p className='text-xl font-bold'>{overview}</p>
                    <div className="">
                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-20 text-black">Play</button>
                        <button type="button" class="py-2.5 px-5 me-2 mb-2 text-sm font-medium  focus:outline-none bg-white rounded-lg border border-gray-20 text-black">More info</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Videotitle
