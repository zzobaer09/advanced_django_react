import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

import API_URL from "./BackendDefaustUrls";

const ShowProducts = () => {

    const [products , setState] = useState([])
    const getProducts = async () => {
        const response = await axios.get(API_URL+"api/")
        setState(response.data)
    }
    useEffect(()=> {
        getProducts();
    } , [])

    return (
        <div className="products-card-info">

            {
                products.map((product , index)=>(
                    <Card className="m-2 rounden shadow-lg" style={{ width: '22rem' }}>
                        <Card.Img variant="top" src={product.image}/>
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>price: {product.price}</ListGroup.Item>
                            <ListGroup.Item>{product.category? product.category : "unknown"}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Link className="btn btn-primary" to={`${product.id}`}>Show Detail</Link>
                        </Card.Body>
                    </Card>
                    
                ))
            }
        </div>
    )
}


export default ShowProducts;