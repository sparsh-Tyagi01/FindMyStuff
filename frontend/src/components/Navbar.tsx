import { Menu, Search, X } from "lucide-react";
import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="px-2 py-1 bg-white shadow-[0px_0px_10px] rounded-[5px]">
        <div className="flex justify-between items-center">
        <img src="/findmystuff.png" alt="logo" className="w-40"/>

        <div className="hidden md:flex">
            <Link to="#" className="mr-4 font-medium text-emerald-800">Home</Link>
            <Link to="#" className="mr-4 font-medium text-emerald-800">Browse Items</Link>
            <Link to="#" className="mr-4 font-medium text-emerald-800">Post an Item</Link>
        </div>
        <div className="hidden md:flex">
            <div className="flex justify-center items-center mr-4">
                <Search className="text-black/50"/>
                <input type="text" placeholder="Search..." className="focus:outline-none border-y-2 border-r-2 border-black/50 rounded-[5px] px-2 w-28"/>
            </div>
            <Link to="/register" className="font-bold text-yellow-600">LogIn/SignUp</Link>
        </div>

        <div
         className="md:hidden cursor-pointer flex justify-center items-center"
         onClick={()=>setOpenMenu(!openMenu)}>
            <div className="flex justify-center items-center mr-4">
                <Search className="text-black/50"/>
                <input type="text" placeholder="Search..." className="focus:outline-none border-y-2 border-r-2 border-black/50 rounded-[5px] px-2 w-20"/>
            </div>
            {openMenu ? <X size={28}/> : <Menu size={28}/>}
        </div>
        </div>

        {openMenu && (
            <div className="md:hidden space-y-2 mt-2">
                <div className="font-medium text-emerald-800">
                    Home
                </div>
                <div className="font-medium text-emerald-800">
                    Browse Items
                </div>
                <div className="font-medium text-emerald-800">
                    Post an Item
                </div>
                <div className="font-medium text-emerald-800">
                    LogIn/SignUp
                </div>
            </div>
        )}
    </div>
  )
}

export default Navbar