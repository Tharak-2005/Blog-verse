import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Signin from './Signin.jsx'
import Signup from './Signup.jsx'
import NavBar from './NavBar.jsx'
import Home from './Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      < NavBar />
      {/* < Signup /> */}
      {/* <Signin /> */}
      < Home />
    </>
  )
}

export default App
