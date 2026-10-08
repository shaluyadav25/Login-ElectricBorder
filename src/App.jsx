import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Login/Login"
import Home from "./Home/Home"
import Register from "./Register/Register"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App