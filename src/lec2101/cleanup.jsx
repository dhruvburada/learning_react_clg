import { useState,useEffect } from "react";
import {Promise} from "bluebird";

function fetchUserData()
{
    return new Promise((resolve)=>{
        setTimeout(()=>resolve({name:"Dhruv",age:18}), 3500);   
    }
);

}

function UserComponent1()

{
    const [id,setAge] = useState("loading");
    const [name,setName] = useState("loading");

    useEffect(() => 
    {
        const promise = fetchUserData().then((user)=>
        {
            setAge(user.age);
            setName(user.name);
        });

        return () => promise.cancel();  // Cleanup function to cancel the promise when the component is unmounted
    });
    
    return (
        <div>
            <h1>Age : {id}</h1>
            <h2>Name : {name}</h2>
        </div>
    )

}

export default UserComponent1;