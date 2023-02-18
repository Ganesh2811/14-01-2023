import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
 
export default function Single() {
    const[api,setApi]=useState({});
    let ans =useParams();

    // console.log(ans);

     var productId = ans['productId'];
    //  console.log(productsId);
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(res=>res.json())
        .then(json=>
            {
                console.log(json);    
            setApi(json);
            }
          
            )
    },[])
  return (
    <div className='container'>
        <h2>Single product</h2>
        <div className='row'>
        <div className='col-xl-5'>
            <img src={api.image} className='img-fluid'/>
            </div>
            <div className='col-lg-7'>
            <h3>{api.title}</h3>
            <h4>{api.price}</h4>
            <h3>{api.description}</h3>
            <h3>{api.id}</h3>
            <button className='btn btn-dark text-center'>buy know</button>
            </div>
        </div>
    </div>
  )
}
