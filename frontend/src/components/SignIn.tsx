import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className='w-screen h-screen bg-gray-200 flex flex-col justify-center items-center'>
      <img src="/findmystuff.png" alt="logo" className="w-60 md-w-80 mb-2"/>
      <div className="w-[85vw] md:w-[40vw] h-[80vh] bg-white rounded-[8px] flex flex-col items-center shadow-[0px_0px_10px]">
        <h1 className="font-bold text-xl mt-8">SignIn to your Account</h1>
        <p className="text-black/60 text-xs md:text-sm">Join the community and never lose an item again</p>
        <form className="flex flex-col mt-8 w-[80vw] md:w-[35vw]">
          <label htmlFor="email" className="font-medium mb-1">Email:</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" className="focus:outline-none bg-gray-200 rounded-[5px] py-1 px-2 mb-2 border-1 border-gray-400"/>
          <label htmlFor="password" className="font-medium mb-1">Password:</label>
          <input id="password" name="password" type="password" placeholder="Create your password" className="focus:outline-none bg-gray-200 rounded-[5px] py-1 px-2 mb-2 border-1 border-gray-400"/>
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 transition-colors duration-600 py-1 rounded-[5px] font-medium mt-8 cursor-pointer">Sign In</button>
        </form>
        <Link to="/register" className="text-blue-600 mt-2 font-medium">Back to register</Link>
      </div>
    </div>
  )
}

export default SignIn