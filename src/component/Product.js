import React from 'react'
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../customhook/useFetch';

export default function Product() {
// const[api,setApi]=useState([]);

// let ans =useParams();
// useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//             .then(res=>res.json())
//             .then(resultfromapi=>{
//                 console.log(resultfromapi)
//                 setApi(resultfromapi);
//             })
// },[]);
var apivalue = useFetch('products')

  return (
    <div className='container'>
<h1>API CALL</h1>

<div className='row'>
{
apivalue && apivalue.length>0 &&  apivalue.map((obj)=>
    
    <div className='col-lg-3 text-center'>
    <img src={obj.image} className='img-fluid'/>
    <h2>{obj.price}</h2>
    <h2>{obj.titale}</h2>
    <p>
        <Link to={'/single/'+obj.id} className='btn btn-dark'>view details</Link>
    </p>
    </div>
    )
   
}
</div>

    </div>
  )
}
