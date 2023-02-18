import React from 'react'
import { useState,useEffect } from 'react';

export default function About() {
 
 
 
 const[no,setno]= useState(0);
 const[name,setName]= useState('shubham');
 console.log(no);
 console.log(typeof setno);

 var myfunc = ()=>{
    // alert();

    setno(Math.random());
 }
 useEffect(()=>{
    console.log('use effect called',Math.random());
 });
//  useEffect(()=>{
//     console.log('use effect called',Math.random());
//  },[]);
//  useEffect(()=>{
//     console.log('use effect called',Math.random());
//  },[name]);
//  useEffect(()=>{
//     console.log('use effect called',Math.random());
//  },[name,no]);


 function myfunc1(){
    setName('shubham prabhu');
    
 }
 
 
 
 
    return (
        <>
    <div >About page</div>

 {no}
 <hr/>
 <button onClick={myfunc}>but-1</button>
 <hr/>
 {name}
 <hr/>
 <button onClick={myfunc1}>but-2</button>

</>
  )
}
