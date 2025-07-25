import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const MainLayout = () => {
  return (
    <div className="flex flex-col items-center min-h-screen">
        <header className="sticky top-2  z-10 w-[97vw] mt-2">
            <Navbar/>
        </header>

        <main className="flex-1 w-[97vw] mt-15">
          <Outlet/>
        </main>

        <footer className="mt-10">
          <Footer/>
        </footer>
    </div>
  )
}

export default MainLayout