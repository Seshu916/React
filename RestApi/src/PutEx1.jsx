import axios from "axios";
import {useRef,useState} from "react";
const PutEx1=()=>{
    const [res,setRes]=useState({});
    const ref1=useRef(null);
    const ref2=useRef(null);
    const put_data=()=>{
        putEx();
    }
    const putEx=async ()=>{
        const res=await axios.put("https://reqres.in/api/users/2",{"name":ref1.current.value,"job":ref2.current.value});
        const {data}=res;
        setRes(data);
    }
    return(
        <>
            <input type="text" ref={ref1}></input> <br></br><br></br>
            <input type="text" ref={ref2}></input> <br></br><br></br>
            <button onClick={put_data}>Post</button>
            <p>{JSON.stringify(res)}</p>
        </>
    )
}
export default PutEx1;