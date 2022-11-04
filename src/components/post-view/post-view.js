import axios from "axios";
import {useEffect, useState} from "react";
import Card from "../../card";
import Header from "../header/header";
const PostView =() => {
    const [posts, setPosts] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:5000/post").then((res)=> {
            setPosts(res.data)
            console.log(res.data)
        }).catch((err)=>{
            if(err) {
                console.log(err);
            }
        })
    }, [])
    
    return(
        
        <div className="post-container">
            <Header/>
            {posts.map((item, i)=>{
                    return (
                        <Card postInfo={item} key={i}/>
                    )
            })}
        </div>
    );
}
export default PostView;