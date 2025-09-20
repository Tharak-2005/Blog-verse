import NavBar from "./NavBar";
import {useState} from 'react'
import { KeyRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react'
const Signin = ()=> {
    const [showPassword,setShowPassword] =useState(false);
    const handlePassword=(event)=>{
        setShowPassword((password)=>!password);
    }
    return (
        <div className="h-screen w-screen flex flex-col items-center   bg-blue-50">
            <NavBar />
            <div className="h-130 w-100 bg-white  rounded-2xl mt-5 shadow-2xl ">
                <div className="">
                    <h2 className="flex font-bold items-center justify-center mt-5 mb-3 text-2xl ">Sign In</h2>
                    <p className="flex items-center justify-center">Access your account</p>
                </div>
                <div className="h-50 flex flex-col justify-evenly ml-3 my-10">
                    <p className='' >Email Address</p>
                    <input className='rounded-2xl border-1 w-[98%] h-15 pl-5' type="email" name="" id="" placeholder="sample@gmail.com" />
                    <p>Password</p>
                    <div className="relative">
                        <input className='rounded-2xl border-1 w-[98%] h-15 pl-10' type={showPassword?"password":"text"} name="" id="" placeholder="sample123" />
                        <KeyRound className='absolute top-5 left-2 text-blue-500'/>
                        <p onClick={handlePassword}>{showPassword ?<Eye className='absolute right-4 top-5'/>:<EyeOff className='absolute right-4 top-5'></EyeOff>}</p>
                    </div>
                    
                </div>
                <div className="flex ml-3">
                    <input className=''type="checkbox" name="" id="" />
                    <p className="ml-3">Remember me</p>
                    <a className='ml-30 hover:text-blue-500 'href="">Forget Password?</a>
                    
                </div>
                <div className="flex ml-3 mt-3 items-center justify-center  rounded-2xl h-15 w-[96%]  bg-blue-500">
                    <button className=' 'type="submit">Sign In</button>
                    
                </div>
                <div className="flex flex-col justify-center items-center">
                    <p>-----------------------------------------------</p>
                    <p>Dont have an account? <a className='hover:text-blue-500'href="">Create one here</a></p>
                </div>
            </div>
        </div>
    )
}

export default Signin;