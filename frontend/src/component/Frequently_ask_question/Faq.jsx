import React, { useState } from 'react';
import data from './data.js';
// import Card from './Card.jsx'; // Assuming Card.jsx is used for styling or layout

const Faq = () => {
    const [show, setShow] = useState(null); // State to track which answer to show

    const toggleAnswer = (id) => {
        if (show === id) {
            // If clicked question is already open, close it
            setShow(null);
        } else {
            // Otherwise, open the clicked question
            setShow(id);
        }
    };

    return (
        <div className="bg-black text-gray-400 flex items-center justify-center flex-col w-full">
            <div className="w-[50%]">
                <h1 className='text-3xl font-bold mb-2'>Frequent Asked Questions</h1>
                <div className="">
                    {data.map((item) => (
                        <div key={item.id} className=''>
                            <h1
                                onClick={() => toggleAnswer(item.id)}
                                className='bg-gray-400 text-gray-700 m-2'
                            >
                                {item.question}
                            </h1>
                            {/* Show the answer only if its id matches the current show state */}
                            <div className="flex flex-wrap bg-gray-500 text-gray-700 mb-2">
                                {show === item.id && (
                                    <h2 className=''>{item.answer}</h2>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;
