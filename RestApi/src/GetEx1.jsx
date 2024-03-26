import React, { useEffect,useState } from "react";
import axios from "axios";

let GetEx1 = ()=>{

    let[arr,setArr] = useState([]);

    let getData = async()=>{
        let res = await axios.get("http://localhost:7000/getAll");
        const{data} =res;
        setArr(data);
    }

    useEffect(()=>{
        getData();
    },[]);
    
    return(<>
    
        <div>
            <table border={1} cellPadding={10} cellSpacing={1} style={{margin:'auto',marginTop:'200px'}} >
                <thead>
                <tr>
                    <td>empid</td>
                    <td>empname</td>
                    <td>salary</td>
                    <td>designation</td>
                    
                </tr>
                </thead>

                <tbody>
                   {
                     arr.map((element,index)=>{
                        return(
                            <tr key={index}>
                                <td>{element.empId}</td>
                                <td>{element.empName}</td>
                                <td>{element.salary}</td>
                                <td>{element.designation}</td>
                                
                            </tr>
                        )
                    })
                   }
                </tbody>

            </table>
        </div>
    
    
    </>)
}
export default GetEx1;