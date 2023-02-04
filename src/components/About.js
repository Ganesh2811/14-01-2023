import { useEffect, useState } from "react";

export default function About(){

    const [no , setno] = useState(0);
    const [name, setname] = useState('ganesh')
    var myfunc = ()=>{
        setno(Math.random());
    }
    var myfunc1 = ()=>{
        setname('ganesh pawar')    
     }
    // useEffect(()=>{
    //     console.log('use effect called',Math.random());
    // })
    // useEffect(()=>{
    //     console.log('use effect called',Math.random());
    // },[]);
    // useEffect(()=>{
    //     console.log('use effect called',Math.random());
    // },[name]);
    useEffect(()=>{
        console.log('use effect called',Math.random());
    },[name,no]);
    

    return(
        <div className="container">
        <h1>this is a About page</h1>
        {no}
        <hr />
        {name}
        <hr />
        <button onClick={myfunc}>Click1</button>        
        <hr />
         <button onClick={myfunc1}>Click2</button>        
        </div>
    );
}