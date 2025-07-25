import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <main className="flex flex-col items-center">
      <motion.section
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-[85vw] md:w-[45vw] bg-emerald-100/70 rounded-xl flex flex-col items-center justify-center py-10 shadow-[0px_0px_10px]"
      >
        <h1 className="font-extrabold text-3xl text-green-900">
          Lost Something?
        </h1>
        <h1 className="font-extrabold text-3xl text-green-900 mb-2">
          Found Something?
        </h1>
        <p className="font-medium text-sm">
          Join the community to find and return lost
        </p>
        <p className="font-medium text-sm mb-3">items around you.</p>
        <div>
          <button className="bg-green-900 py-1 px-3 rounded-md text-white border-1 border-green-900 box-border font-medium mr-3 cursor-pointer hover:bg-white hover:text-green-900 transition-all duration-500">
            Browse items
          </button>
          <button className="bg-white py-1 px-3 rounded-md text-green-900 border-1 border-green-900 box-border font-medium cursor-pointer hover:bg-green-900 hover:text-white transition-all duration-500">
            Post an item
          </button>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <h1 className="text-3xl font-bold">How It Works?</h1>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-10">
          {["Post Items", "Browse Listings", "Get Contacted"].map(
            (step, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex justify-center items-center bg-gray-100 w-[75vw] md:w-[25vw] h-[15vh] md:h-[25vh] shadow-[0px_0px_5px] rounded-xl"
              >
                <h1 className="text-emerald-900 text-2xl font-bold">{step}</h1>
              </motion.div>
            )
          )}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center"
      >
        <h1 className="text-3xl font-bold">Latest Lost & Found Items</h1>
        <div className="grid grid-cols-2 gap-10 mt-10">
          {[1, 2, 3, 4].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="w-[40vw] md:w-[25vw] h-[10vh] md:h-[25vh] shadow-[0px_0px_5px] rounded-xl flex items-center justify-center"
            >
              Item {i + 1}
            </motion.div>
          ))}
        </div>
        <Link
          to="#"
          className="text-emerald-900 font-medium mt-8 text-xl inline-block"
        >
          See all items
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 w-[97vw] flex flex-col justify-center items-center bg-yellow-100 rounded-xl py-8 shadow-[0px_0px_10px] text-center"
      >
        <h1 className="text-2xl md:text-4xl font-extrabold text-yellow-500 mb-2">
          Found Something Valuable?
        </h1>
        <p className="font-medium mb-2">
          Post it now and help someone in need.
        </p>
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 px-4 py-2 rounded-[10px] font-medium text-white hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          Post an Item
        </motion.button>
      </motion.section>
    </main>
  );
};

export default Homepage;
