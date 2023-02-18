import React from 'react'
import { useState ,useEffect } from 'react'
import path from '../customhook/apipath'
export default function useFetch(routeName) {
    const [api ,setApi] =  useState([]);

    useEffect(()=>{
        // https://fakestoreapi.com/products
        fetch(path.path1+routeName)
        .then(res=>res.json())
        .then(value=>{
            // console.log(value);

            setApi(value);
        })
    },[routeName]);

  return api
}
