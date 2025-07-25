import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white shadow-[0px_0px_10px] rounded-[5px] mt-6 px-4 py-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <img src="/findmystuff.png" alt="logo" className="w-36" />
          <p className="text-sm text-gray-500 mt-2">
            Helping you find what’s lost and return what’s found.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-2 md:gap-6">
          <Link to="#" className="text-emerald-900 font-medium hover:underline">
            About
          </Link>
          <Link to="#" className="text-emerald-900 font-medium hover:underline">
            Contact
          </Link>
          <Link to="#" className="text-emerald-900 font-medium hover:underline">
            Terms & Services
          </Link>
        </div>

        <div>
          <p className="text-sm text-gray-500 mb-1">Need help?</p>
          <Link to="/register" className="text-yellow-600 font-semibold hover:underline">
            LogIn / SignUp
          </Link>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      <p className="text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} FindMyStuff. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
