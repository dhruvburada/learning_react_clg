import * as React from "react";

function fetchUserData()
{
    let p1 = new Promise((resolve)=>
    {
        setTimeout(()=>resolve({name:"Dhruv",age:18}), 3500);
    })

    return p1;
}

function ApiSimulation()
{
    const [name,setName] = React.useState("loading");
    const [age, setAge] = React.useState("loading");

    React.useEffect(()=>
    {
        fetchUserData()
       .then(data=>
        {
            setName(data.name);
            setAge(data.age);
        })
       .catch(err=>console.log(err));
    }, [])

    return (
        <div>
            <h1>Name : {name}</h1>
            <h2>Age : {age}</h2>
        </div>
    )
}

export default ApiSimulation;