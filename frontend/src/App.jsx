
import Home from "./component/Home"

// // import Login from "./pages/Login"


// const App = () => {
//   return (
//     <>
//       <div className="w-[100%] h-[100%]">
//         <Home/>
//         {/* <Login/> */}
//       </div>
//     </>
//   )
// }

// export default App

import { BrowserRouter as Router, Route, Routes }
  from "react-router-dom";

import SingUp from './pages/SingUp'
import Singin from './pages/Singin'
import Landing from './pages/Landing'
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const res = axios.get('http://localhost:3000')
      console.log(res.data)
      setMessage(res)
    } catch (error) {
      console.log(error)
    }
  }, []);

  return (
    <>
      <h1>{message}</h1>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="singup" element={<SingUp />} />
          <Route path="singin" element={<Singin />} />
          <Route path="home" element={<Landing />} />

        </Routes>

      </Router>
    </>
  )
}

export default App
