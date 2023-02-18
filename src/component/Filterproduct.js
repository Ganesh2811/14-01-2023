import React from 'react'
import useFetch from '../customhook/useFetch'
import { Link } from 'react-router-dom'
import container from 'react-bootstrap/container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Filterproduct(props) {
    // console.log(props);
    const {xyz}=props;
    // console.log(xyz);
var value =(xyz =='')?'products':`products/category/${xyz}`;
//  console.log(value);
var apivalue = useFetch(value);

console.log(apivalue);


  return (
    <div><h1> categories wise product</h1>
    <container>
    <Row>
        {
            apivalue &&   apivalue.length>0 &&   apivalue.map ((obj)=>
            <Col lg='3'>
        <img src={obj.image} className='img-fluid'/>
        <h2>{obj.price}</h2>
        <p>{obj.tital}</p>
      <p>  <Link to={'/single/'+obj.id} className='btn btn-dark'>view details</Link> </p>
            </Col>)
            
        }
  
        </Row>
    </container>
    </div>
  )
}
