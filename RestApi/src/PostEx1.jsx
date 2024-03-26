import axios from "axios";
import {useRef,useState} from "react";
const PostEx1=()=>{
    const [res,setRes]=useState({});
    const ref1=useRef(null);
    const ref2=useRef(null);
    const post_data=()=>{
        postEx();
    }
    const postEx=async ()=>{
        const res=await axios.post("https://reqres.in/api/register",{"email":ref1.current.value,"password":ref2.current.value});
        const {data}=res;
        setRes(data);
    }
    return(
        <>
            <input type="email" ref={ref1}></input> <br></br><br></br>
            <input type="password" ref={ref2}></input> <br></br><br></br>
            <button onClick={post_data}>Post</button>
            <p>{JSON.stringify(res)}</p>
        </>
    )
}
export default PostEx1;