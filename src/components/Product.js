import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";

export default function Product(){

    const[api,setApi] = useState([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(resultfromapi=>{
                console.log(resultfromapi);
                setApi(resultfromapi);


            });
    },[])


    return(
            <div className="container">
            <h1>API called</h1>
            <div className="row">
                {
                    api && api.length>0 &&  api.map(obj=>
                        <div className="col-xl-3 text-center">
                            <img src={obj.image} className='img-fluid' />
                            <h2>{obj.price}</h2>
                            <p>{obj.title}</p>
                            <p>
                                <Link to={'/single/'+ obj.id} className="btn btn-dark">View deatils</Link> </p> </div>
    
                    )
                  

                }

            </div>
            
            </div>
        );
}