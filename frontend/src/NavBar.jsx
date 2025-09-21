import React from "react"
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (
        <div className="w-screen flex justify-around items-center border-1 h-16 border-black">
            <h1 className="text-sm md:text-xl font-bold">Blog-verse</h1>
            <Link to="/Home" className="text-black hover:bg-blue-300 px-5 py-2 rounded-lg cursor-pointer">Home</Link>
            <div className="flex gap-5">
                <Link to="/Signin" className="mt-1 sm:mt-2 sm:text-sm font-semibold text-gray-400 cursor-pointer">SignIn</Link>
                <Link to="/Signup" className="text-xs sm:text-sm font-semibold  bg-blue-500 text-white px-5 py-2 rounded-xl cursor-pointer">SignUp</Link>
            </div>
        </div>
    )
}

export default NavBar