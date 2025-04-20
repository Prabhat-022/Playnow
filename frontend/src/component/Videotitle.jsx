import React from 'react'

const Videotitle = ({ title, overview }) => {
    return (
        <>
            <div className="absolute top-48 left-10 w-3/12 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5  p-4 bg-black opacity-80 rounded-lg">
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='text-xl font-bold overflow-y-auto max-h-[200px]'>{overview}</p>
                <div className="flex items-center justify-between">
                    <button type="button" className="py-2.5 px-5 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 text-black">Play</button>
                    <button type="button" className="py-2.5 px-5 text-sm font-medium focus:outline-none bg-white rounded-lg border border-gray-200 text-black">More info</button>
                </div>
            </div>
        </>
    )
}

export default Videotitle
