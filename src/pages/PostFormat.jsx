import React, {useState, useEffect} from "react";
import { Link} from "react-router-dom";
function PostFormat(){
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
        <div class="w-full max-w-4xl content-center m-auto">
            <div class="text-center md:text-left text-xl md:text-3xl font-bold mb-2">
                Pick your social media platforms and post frequency!
            </div>
            
            <dl class="mb-4">
                <dt>
                    <div class="text-xl">
                        <input type="checkbox" id ="instagram" />
                        <label for="instagram"> Instagram</label>
                    </div>                   
                    <dd class="pl-4">
                        <input type="checkbox" id ="instagramimage" />
                        <label for="instagramimage"> Image</label>                    
                    </dd>
                    <dd class="pl-4">
                        <input type="checkbox" id ="instagramvideo" />
                        <label for="instagramvideo"> Video</label>  
                    </dd>
                    <dd class="pl-4">
                        <input type="checkbox" id ="instagramstory" />
                        <label for="instagramstory"> Story</label>
                    </dd>
                    <dd class="pl-4"> 
                        <input type="checkbox" id ="instagramreel" />
                        <label for="instagramreel"> Reel</label>
                    </dd>
                </dt>
                <dt>
                    <div class="text-xl">
                        <input type="checkbox" id ="tiktok" />
                        <label for="tiktok"> Tiktok</label>
                    </div>                  
                    <dd class="pl-4">
                        <input type="checkbox" id ="tiktokreel" />
                        <label for="tiktokreel"> Reel</label>
                    </dd>
                </dt>
                <dt>
                    <div class="text-xl">
                        <input type="checkbox" id ="facebook" />
                        <label for="facebook"> Facebook</label>
                   </div>               
                    <dd class="pl-4">
                        <input type="checkbox" id ="facebookimage" />
                        <label for="facebookimage"> Image</label>                    
                    </dd>
                    <dd class="pl-4">
                        <input type="checkbox" id ="facebookvideo" />
                        <label for="facebookvideo"> Video</label>  
                    </dd>
                    <dd class="pl-4">
                        <input type="checkbox" id ="facebookstory" />
                        <label for="facebookstory"> Story</label>
                    </dd>
                    <dd class="pl-4"> 
                        <input type="checkbox" id ="facebooktext" />
                        <label for="facebooktext"> Text</label>
                    </dd>
                </dt>
                <dt>
                    <div class="text-xl">
                        <input type="checkbox" id ="twiter" />
                        <label for="twiter"> Twiter</label>
                    </div>                  
                    <dd class="pl-4">
                        <input type="checkbox" id ="twitterimage" />
                        <label for="twitterimage"> Image</label>                    
                    </dd>
                    <dd class="pl-4">
                        <input type="checkbox" id ="twittervideo" />
                        <label for="twittervideo"> Video</label>  
                    </dd>
                    <dd class="pl-4"> 
                        <input type="checkbox" id ="twittertweet" />
                        <label for="twittertweet"> Tweet</label>
                    </dd>
                </dt>
                <dt>
                    <div class="text-xl">
                        <input type="checkbox" id ="linkedin" />
                        <label for="linkedin"> LinkedIn</label>   
                    </div>                                
                    <dd class="pl-4">
                        <input type="checkbox" id ="linkedinimage" />
                        <label for="linkedinimage"> Image</label>                    
                    </dd>
                    <dd class="pl-4">
                        <input type="checkbox" id ="linkedinvideo" />
                        <label for="linkedinvideo"> Video</label>  
                    </dd>
                    <dd class="pl-4"> 
                        <input type="checkbox" id ="linkedintext" />
                        <label for="linkedintext"> Text</label>
                    </dd>
                </dt>                
            </dl>
            <Link to="/" className="float-left">
                <button class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2"
                >Back</button>
            </Link>
            <Link to="/topics" className="float-right">
                <button class="px-4 py-1 text-sm text-brown-dark font-semibold rounded-full border border-brown  hover:text-white hover:bg-brown-dark  hover:border-transparent focus:outline-none focus:ring-2 focus:ring-brown-dark focus:ring-offset-2"
                >Next</button>
            </Link>
        </div>
    )
}
export default PostFormat;