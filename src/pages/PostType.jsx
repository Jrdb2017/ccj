import React, {useState, useEffect} from "react";
import {   Link} from "react-router-dom";

function PostType(){
    const [list, setList] = useState([]);
    const [input, setInput] = useState("");
    const add = () =>{
        if(input===''|| list.findIndex(l => l===input)>-1){return}//add tooltip or message?
        setList(oldList =>[...oldList, input]);
        setInput('');
    }
    const remove = (event)=>{
        console.log(event.target.id);
        var filteredList = list.filter(l => l !==event.target.id);
        setList(filteredList);
    }
    return(
        <div class="text-red-900">
            Pick categories for your posts!
        <form>
            <input type="checkbox" id ="education" />
            <label for="education">Education</label><br/>
            <input type="checkbox" id ="entertainment" />
            <label for="entertainment">Entertainment</label><br/>
            <input type="checkbox" id ="personal"/>
            <label for="personal">Personal</label><br/>
            <input type="checkbox" id ="announcement" />
            <label for="announcement">Announcement</label><br/>
            <input type="checkbox" id ="testimonial" />
            <label for="testimonial">Testimonial</label><br/>
            {list.map(listItem=>
                <div key={listItem}>
                     <label for={listItem}>{listItem} </label> 
                     <button class="px-4 py-1 text-sm text-red font-semibold rounded-full border border-red-900  hover:text-white hover:bg-red-900   hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-900  focus:ring-offset-2"         
                      id={listItem} onClick={remove} type="button">X</button>
                </div>
                )
              }
        </form>

        <form>
            <button class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2"
                onClick={add} type="button" >Add</button>
            <input class="border-brown" type="text" id="topicInput" onChange={e=>setInput(e.target.value)} value={input}></input>
        </form>
        <Link to="/" >
            <button class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2"
            >Back</button>
        </Link>
        <Link to="/topics">
            <button class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2"
            >Next</button>
        </Link>
        </div>
    )
}
export default PostType;