import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col  items-center mt-10 gap-5'>
        <h1 className="text-2xl text-blue-600 font-bold">Join Wague-verse</h1>
        <p className='text-gray-600 text-center font-semibold'>Create your account and  <br/> start your blogging journey</p>
        <form className="flex flex-col border-1 border-black w-1/3 py-7 items-center gap-5 rounded-xl">
            <div className="w-[90%]">
                <h1 className="text-md text-gray-700 font-semibold">Full Name</h1>
                <input type="text" name="name" id="1" placeholder='Enter your full name' className='border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 '/>
            </div>
            <div className="w-[90%]">
                <h1 className="text-md text-gray-700 font-semibold">Email Address</h1>
                <input type="email" name="email" id="2" placeholder='Enter your Email address' className='border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 '/>
            </div>
            <div className="w-[90%]">
                <h1 className="text-md text-gray-700 font-semibold">Password</h1>
                <input type="password" name="password" id="3" placeholder='Enter your password' className='border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 '/>
            </div>
            <div className="w-[90%]">
                <h1 className="text-md text-gray-700 font-semibold">Confirm Password</h1>
                <input type="password" name="password" id="4" placeholder='Confirm your password' className='border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 '/>
            </div>
            <div className="flex gap-3 border-gray-400 border-1 w-[90%] py-5 px-4 justify-center rounded-xl ">
                <input type="checkbox" name="terms" id="6"  className="h-5 w-5 items-center"/>
                <p>i agree the terms and conditions</p>
            </div>
            <button className="w-[90%] cursor-pointer rounded-xl bg-purple-500 font-semibold text-white px-4 py-5">Create Account</button>
            <div className="border-[0.5px] border-gray-500 w-[90%]"></div>
            <p className="text-gray-500 font-semibold">Already have an account ?  <span className="text-purple-500 cursor-pointer">SignIn Here</span></p>
            <button className="text-gray-500 font-semibold hover:bg-gray-200 py-5 px-4 w-[90%] rounded-xl cursor-pointer">Back to home</button>
        </form>
    </div>
  )
}

export default SignUp;