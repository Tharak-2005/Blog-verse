import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'
import {Routes,Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Home" element={<Home/>} />

    </Routes >  
  )
}

export default App
