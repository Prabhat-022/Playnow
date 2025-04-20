import React, { useState } from 'react';
import data from './data.js';

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
        <div className="bg-gray-800 text-gray-400 flex items-center justify-center flex-col h-[600px]">
            <div className="md:w-1/2 w-full p-4">
                <h1 className='text-3xl font-bold mb-2'>Frequent Asked Questions</h1>
                <div className="flex flex-col">
                    {data.map((item) => (
                        <div key={item.id} className="bg-gray-500 rounded-lg p-4 mb-4">
                            <h1
                                onClick={() => toggleAnswer(item.id)}
                                className="cursor-pointer"
                            >
                                {item.question}
                            </h1>
                            {/* Show the answer only if its id matches the current show state */}
                            {show === item.id && (
                                <p className="mt-2">{item.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <hr className='w-[100%] border-gray-400 mt-4'/>
        </div>
    );
};

export default Faq;
