import React, {useState, useEffect} from "react";
import { Link} from "react-router-dom";

function Topics(){
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const add = () =>{
        if(input===''|| list.findIndex(l => l===input)>-1){return}//add tooltip or message?
        setList(oldList =>[...oldList, input]);
        setInput('');
    }
    return(
    <div class="w-full max-w-4xl content-center m-auto">
        <div class="text-center md:text-left text-xl md:text-3xl font-bold mb-4">
            Add a Topics or Pain point you want to cover
        </div>
        <div class="flex flex-row mb-4">
            <div class="ml-2 w-1/6 md:w-1/12">
                <button  onClick={add} class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2"
                >Add</button>
            </div>
            <input
            type="text"
            id="topicInput"
            onChange={e=>setInput(e.target.value)}
            onKeyPress={e=>(e.charCode===13)?add():""}//
            value={input}
            class="border-brown border-2 rounded mx-2  w-4/6 md:w-11/12 py-2 px-4  leading-tight focus:border-brown-dark" 
            />
        </div>
          <ul id="list" class="mb-4">
              {list.map(l=>
               <li key={l} class="border-brown border-b-2 mx-2">{l}</li>
                )
              }
          </ul>
          <Link to="/postFormat" className="float-left">
                <button class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2"
                >Back</button>
            </Link>
            <Link to="/results" className="float-right">
                <button class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2"
                >Next</button>
            </Link>
    </div>
    )
}

export default Topics;