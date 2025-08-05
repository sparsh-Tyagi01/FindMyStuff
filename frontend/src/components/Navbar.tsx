import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const navItems = [
    { label: "Home", to: "#" },
    { label: "Browse Items", to: "#" },
    { label: "Post an Item", to: "#" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white border-b border-black/20 px-8 py-2 shadow-md">
      <div className="flex justify-between items-center">
        <img src="/findmystuff.png" alt="logo" className="w-40" />

        <div className="hidden md:flex justify-center flex-1 space-x-8">
  {navItems.map((item) => (
    <motion.div
      key={item.label}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link to={item.to} className="font-medium text-emerald-800">
        {item.label}
      </Link>
    </motion.div>
  ))}
</div>


        <div className="hidden md:flex">
          <div className="flex justify-center items-center mr-4">
            <Search className="text-black/50" />
            <input
              type="text"
              placeholder="Search..."
              className="focus:outline-none border-y-2 border-r-2 border-black/50 rounded-[5px] px-2 w-28"
            />
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/register" className="font-bold text-yellow-600">
              LogIn/SignUp
            </Link>
          </motion.div>
        </div>

        <div
          className="md:hidden cursor-pointer flex justify-center items-center"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className="flex items-center border border-gray-300 rounded-md px-2 w-64 bg-gray-50 focus-within:ring-2 focus-within:ring-emerald-500">
  <Search className="text-black/50 mr-2" />
  <input
    type="text"
    placeholder="Search for items..."
    className="bg-transparent w-full py-1 focus:outline-none"
  />
</div>

          {openMenu ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {openMenu && (
        <div className="md:hidden space-y-2 mt-2">
          {navItems.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.to} className="block font-medium text-emerald-800">
                {item.label}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/register" className="block font-medium text-emerald-800">
              LogIn/SignUp
            </Link>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
