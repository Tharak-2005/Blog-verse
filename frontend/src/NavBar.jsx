

const NavBar = () => {
    return (
        <div className="flex justify-around items-center border-1 h-16 border-black">
            <h1 className="text-xl font-bold">Wague-verse</h1>
            <button className="text-black hover:bg-blue-300 px-5 py-2 rounded-lg cursor-pointer">Home</button>
            <div className="flex gap-5">
                <button className="font-semibold text-gray-400 cursor-pointer">SignIn</button>
                <button className="font-semibold  bg-blue-500 text-white px-5 py-2 rounded-xl cursor-pointer">SignUp</button>
            </div>
        </div>
    )
}

export default NavBar