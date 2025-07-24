import { useNavigate } from "react-router-dom"

const SignUp = () => {

  const navigate = useNavigate();

  return (
    <div className='w-screen h-screen bg-gray-200 flex flex-col justify-center items-center'>
      <img src="/findmystuff.png" alt="logo" className="w-60 md-w-80 mb-2"/>
      <div className="w-[85vw] md:w-[40vw] h-[80vh] bg-white rounded-[8px] flex flex-col items-center shadow-[0px_0px_10px]">
        <h1 className="font-bold text-xl mt-4">Create an Account</h1>
        <p className="text-black/60 text-xs md:text-sm">Join the community and never lose an item again</p>
        <form className="flex flex-col mt-8 w-[80vw] md:w-[35vw]">
          <label htmlFor="name" className="font-medium mb-1">Full Name:</label>
          <input id="name" name="name" type="text" placeholder="Enter your name" className="focus:outline-none bg-gray-200 rounded-[5px] py-1 px-2 mb-2 border-1 border-gray-400"/>
          <label htmlFor="email" className="font-medium mb-1">Email:</label>
          <input id="email" name="email" type="email" placeholder="Enter your email" className="focus:outline-none bg-gray-200 rounded-[5px] py-1 px-2 mb-2 border-1 border-gray-400"/>
          <label htmlFor="password" className="font-medium mb-1">Password:</label>
          <input id="password" name="password" type="password" placeholder="Create your password" className="focus:outline-none bg-gray-200 rounded-[5px] py-1 px-2 mb-2 border-1 border-gray-400"/>
          <button type="submit" className="bg-yellow-500 hover:bg-yellow-400 transition-colors duration-600 py-1 rounded-[5px] font-medium mt-2 cursor-pointer">Register</button>
        </form>
        <p>Already have an account? <h4 className="inline-block text-blue-600 font-bold mt-4 cursor-pointer" onClick={()=> navigate('/login')}>Sign In</h4></p>
      </div>
    </div>
  )
}

export default SignUp