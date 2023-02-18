import React, { useState } from 'react'
import useFetch from '../customhook/useFetch'
import Filterproduct from '../component/Filterproduct'
export default function Filterpro() {

const [category,setcategory] =useState('')
    function myfunc(ev){
        // console.log(test);
        // console.log(ev);
console.log(ev.target.value);
setcategory(ev.target.value)
    }
    var ans_category = useFetch('products/categories');

  return (
    <div classname='container'>
        <h1 className='tect-center'>select category</h1>
        <select className='form-control' onChange={myfunc}>
            <option value=''>plsase enter category </option>
            {
 ans_category &&   ans_category.length>0 &&  ans_category.map(val=>
    <option value={val}>{val}</option>)
            }
           
        </select>
        <Filterproduct xyz={category}></Filterproduct>
    </div>
  )
}
