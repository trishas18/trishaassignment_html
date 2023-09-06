
import React,{useState,useEffect} from "react";

import { getusers } from "../service/UsersService.js";

export const UsersList=()=>{

    const [users,setusers] = useState([])

    
    useEffect(()=>{
       
        getusers().then(data=>setusers(data))
    },[])

    return (
      <>
       {
       users.length &&(
        users.map(users=> (
            <li key={users.email}>
                <h1>{users.username}{users.email}</h1>
            </li>
        ))

       )

       }
     </>
    )





}
