import React, {useState, useEffect} from "react";
import {   Link} from "react-router-dom";

function NavBar() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [navbarClass, setNavbarClass] = useState("hidden");
    const toggleNavBar = ()=>
    {
        setNavbarOpen(!navbarOpen);
        (navbarOpen === false)?setNavbarClass("hidden"):setNavbarClass("flex");
    }
    return(
    <header class="flex flex-flow flex-wrap justify-between md:space-x-4 items-center relative py-6 px-6 bg-gradient-to-r from-brown-light to-brown-dark">
        <div class="block text-3xl font-bold">
            Zen Planner
        </div>  
        <button onClick = {()=>toggleNavBar()}class="inline-block md:hidden w-8 h-8 bg-white text-brown-dark p-1">
            {(navbarOpen === true)?<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            :<svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>}
        </button>
        <nav class={"flex-col md:flex-row md:flex w-full md:w-auto md:space-x-6 font-semibold p-6 md:p-0 rounded-lg md:rounded-none shadow-md md:shadow-none "+navbarClass}>
            <Link to="/" class="hover:underline">Get started</Link>
            <Link to="/aboutus" class="hover:underline">About us</Link>
            <Link to="/contactus" class="hover:underline">Contact us</Link>
        </nav>
    </header>
    )
}

export default NavBar;