import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from 'react';
const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        conformPassword: ""
    });
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        conformPassword: ""
    });
    const handleChange = (event) => {
        setError("");
        setSuccess("");
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
        setErrors({
            ...error,
            [event.target.name]:"" 
            })
    }

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const handleSubmit = (event) => {

        event.preventDefault();
        let newErrors={}
        if(!formData.fullName){
            newErrors.fullName="Please enter your full name"
        }
        if(!formData.email){
            newErrors.email="Please enter your email"
        }
        if(!formData.password){
            newErrors.password="Please enter your password"
        }
        if(!formData.conformPassword){
            newErrors.conformPassword="Please enter your confirm password"
        }
        else if (formData.password !== formData.conformPassword){
            newErrors.conformPassword="passwords do not match"
        }
        if(Object.keys(newErrors).length>0){
            setErrors(newErrors);
        }
        else{
            setSuccess("Successful login");
            setError("");
            setFormData({
                fullName: "",
                email: "",
                password: "",
                conformPassword: ""
            })
        }

        // if (!formData.fullName || !formData.email || !formData.password || !formData.conformPassword) {
        //     setError("All fields are required");
        // }
        // else if (formData.password !== formData.conformPassword) {

        //     setError("Password and Confirm Password should be same");
        // }
        // else {
        //     console.log(formData);
        //     setSuccess("Successfully signed up");
        //     setError("");
        //     setFormData({
        //         fullName: "",
        //         email: "",
        //         password: "",
        //         conformPassword: ""
        //     })


        // }
    }
    const [showPassword, setShowPassword] = useState(false);
    const [showConformPassword, setShowConformPassword] = useState(false);
    const handlePassword = () => {
        setShowPassword((password) => !password);
    }
    const handleConformPassword = () => {
        setShowConformPassword((password) => !password);
    }
    return (
        <div className='flex flex-col  items-center  gap-5'>
            <NavBar />
            <h1 className="text-2xl text-blue-600 font-bold">Join Wague-verse</h1>
            <p className='text-gray-600 text-center font-semibold'>Create your account and  <br /> start your blogging journey</p>
            <form onSubmit={handleSubmit} className="flex flex-col border-1 border-black w-1/3 py-7 items-center gap-5 rounded-xl" >
                <div className="w-[90%]">
                    <h1 className="text-md text-gray-700 font-semibold">Full Name</h1>
                    <input value={formData.fullName} onChange={handleChange} type="text" name="fullName" id="1" placeholder='Enter your full name' className='border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 ' />

                </div>
                {errors.fullName && <p className='text-red-500'>{errors.fullName}</p>}
                <div className="w-[90%]">
                    <h1 className="text-md text-gray-700 font-semibold">Email Address</h1>
                    <input value={formData.email} onChange={handleChange} type="email" name="email" id="2" placeholder='Enter your Email address' className='border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 ' />

                </div>
                {errors.email && <p className='text-red-500'>{errors.email}</p>}
                <div className="w-[90%]">
                    <h1 className="text-md text-gray-700 font-semibold">Password</h1>
                    <div className='relative'>
                        <input value={formData.password} onChange={handleChange} type={showPassword ? "password" : "text"} name="password" id="3" placeholder='Enter your password' className='border-1 w-full py-4 px-2 rounded-xl focus:outline-none focus:border-purple-500 pl-10' />

                        <KeyRound className='absolute top-5 left-2 text-blue-500' />
                        <p onClick={handlePassword}>{showPassword ? <Eye className='absolute right-4 top-5' /> : <EyeOff className='absolute right-4 top-5'></EyeOff>}</p>

                    </div>
                    
                </div>
                {errors.password && <p className='text-red-500'>{errors.password}</p>}
                <div className="w-[90%]">
                    <h1 className="text-md text-gray-700 font-semibold">Confirm Password</h1>
                    <div className='relative'>
                        <input value={formData.conformPassword} onChange={handleChange} type={showConformPassword ? "password" : "text"} name="conformPassword" id="4" placeholder='Confirm your password' className='border-1 w-full py-4 px-2 pl-10 rounded-xl focus:outline-none focus:border-purple-500 ' />

                        <KeyRound className='absolute top-5 left-2 text-blue-500' />
                        <p onClick={handleConformPassword}>{showConformPassword ? <Eye className='absolute right-4 top-5' /> : <EyeOff className='absolute right-4 top-5'></EyeOff>}</p>
                    </div>
                    
                </div>
                {errors.conformPassword && <p className='text-red-500'>{errors.conformPassword}</p>}
                <div className="flex gap-3 border-gray-400 border-1 w-[90%] py-5 px-4 justify-center rounded-xl ">
                    <input type="checkbox" name="terms" id="6" className="h-5 w-5 items-center" />
                    <p>i agree the terms and conditions</p>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
                <button type="submit" className="flex justify-center gap-3 w-[90%] cursor-pointer rounded-xl bg-purple-500 font-semibold text-white px-4 py-5"><CircleUserRound />Create Account</button>
                <div className="border-[0.5px] border-gray-500 w-[90%]"></div>
                <p className="text-gray-500 font-semibold">Already have an account ?  <Link to="/Signin" className="text-purple-500 cursor-pointer">SignIn Here</Link></p>
                <Link to="/Home" className="text-gray-500 font-semibold hover:bg-gray-200 py-5 px-4 w-[90%] rounded-xl cursor-pointer">Back to home</Link>
            </form>
        </div>
    )
}

export default SignUp;