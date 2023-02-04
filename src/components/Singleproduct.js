import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

    
export default function Singleproduct() {
    const[api,setApi] = useState({});
    // path: '/single-product/:productId';
    let ans = useParams();
    // console.log(ans); //object { productId: "3"}

    var productId = ans['productId'];
    // console.log(productId);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res=>res.json())
            .then(json=>{
                console.log(json)
                setApi(json)
            })
    } , [])
  return (
        <div className='container'>
            <div className='row'>
                <div className='col-xl-5'>
                    <img src={api.image} className='img-fluid'/>
                </div>
                <div className='col-xl-7'>
                <h1>{api.title}</h1>
                <h2>{api.price}</h2>
                <p>{api.description}</p>
                <p>Category : {api.category}</p>
                </div>
            </div>
        </div>
  );
}
