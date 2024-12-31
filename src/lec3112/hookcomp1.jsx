// import * as React from 'react';
import { useState } from 'react';

function FunctionComp1()
{
    const [Name] = useState("Hello");
    return <h1>{Name}</h1>;
}

export default FunctionComp1