import React, {useState, useEffect} from "react";
import {   Link} from "react-router-dom";

function GetStarted(){

    return(
        <div  class="w-full max-w-4xl content-center m-auto">
           
            <div class="text-brown-dark md:flex md:items-center mb-6  ">
                <svg xmlns="http://www.w3.org/2000/svg" class="m-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            </div>
            
            <div class="md:flex md:items-center mb-6 ">
                <label class="w-5/6 md:w-1/3 md:text-right mb-1 md:mb-0 pr-4 mx-2 md:mx-0" for="user">What's your name?</label>
                <input type="text" class="border-brown border-2 w-5/6 mx-2 md:w-2/3 rounded  py-2 px-4  leading-tight focus:border-brown-dark" id="user"></input><br/>
            </div>

            <div class="md:flex md:items-center mb-6">
                <label class="w-5/6  md:w-1/3 md:text-right mb-1 md:mb-0 pr-4  mx-2 md:mx-0" for="userBusinessName">What's your business name (optional)?</label>
                <input type="text" class="border-brown border-2 w-5/6 mx-2 md:w-2/3 rounded  py-2 px-4  leading-tight focus:border-brown-dark" id="userBusinessName"></input><br/>
            </div>
            
            <div class=" md:flex text-center md:justify-center ">
                <Link  to="/postformat">
                  <button  class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2">Let's Start</button>
                </Link>
            </div>   
        </div>
    )
}

export default GetStarted;