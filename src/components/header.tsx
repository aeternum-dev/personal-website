import { Link } from 'react-router-dom'
import { Menu, X } from "lucide-react";
import { useState } from "react";
import MobileLogo from '@/assets/mobile-logo-150.png'



export default function Header() {
    const [isSideMenuOpen, setSideMenu] = useState(false);

  return (
    <header className="flex flex-row items-center bg-blue-950 top-0 w-full h-16 justify-between px-5 md:px-10 lg:px-20 fixed z-10">
        <img src={MobileLogo} alt="Logo" className="flex md:hidden h-10 text-white" color={"white"} />
        <Menu className="flex md:hidden top-5 right-5 cursor-pointer" onClick={() =>setSideMenu(true)}/>
        <section className={`sidemenu z-1 fixed w-screen h-screen bg-blue-950 top-0 right-0 items-center justify-center origin-right animate-open-menu ${isSideMenuOpen ? "flex" : "hidden"}`}>
          <X size={50} className="fixed top-5 right-5 text-white cursor-pointer" onClick={() =>setSideMenu(false)}/>
          <nav className="flex flex-col gap-5">
            <Link className="font-medium text-2xl text-white block" onClick={() =>setSideMenu(false)} to="/">HomePage</Link>
            <Link className="font-medium text-2xl text-white block" onClick={() =>setSideMenu(false)} to="/blog">Blog</Link>
            <Link className="font-medium text-2xl text-white block" onClick={() =>setSideMenu(false)} to="/contact">Contact</Link>
            <Link className="font-medium text-2xl text-white block" onClick={() =>setSideMenu(false)} to="/hobbies">Hobbies</Link>
            <Link className="font-medium text-2xl text-white block" onClick={() =>setSideMenu(false)} to="/photography">Photography</Link>
            <Link className="font-medium text-2xl text-white block" onClick={() =>setSideMenu(false)} to="/projects">Projects</Link>
          </nav>
        </section>

      </header>
  )
}
