 
// import React, { useState } from 'react';

// const Card = ({ props }) => {
//   const { question, id, answer } = props;
//   const [show, setShow] = useState(false);

//   const toggleAnswer = () => {
//     setShow(!show);
//   };

//   return (
//     <div className="flex flex-col justify-center items-center flex-wrap bg-black">
//       <div className="font-bold text-xl mb-2">
//         <div className="bg-black cursor-pointer m-3 p-3 mr-2" onClick={toggleAnswer}>
//           <h3>
//             {id} {question} {show ? '-' : '+'}
//           </h3>
//           <div className="border-t-2 border-solid border-gray-800 my-2"></div>
//         </div>
//       </div>
//       <p className="">
     
//         {
//           show ? <div className=" cursor-pointer w-[100%] m-3 p-3">
//             <h4>Answer: {answer}</h4>
//             <div className="border-t-2 border-solid border-gray-400 my-4"></div>
//           </div> : ""
//         }
//       </p>
//     </div>
//   );
// };

// export default Card;
