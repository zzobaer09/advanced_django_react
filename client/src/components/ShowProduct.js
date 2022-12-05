import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const ShowProducts = () => {
    const [products , setState] = useState([])
    const getProducts = async () => {
        const response = await axios.get("http://localhost:8000/api/")
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
                            <ListGroup.Item>{product.cetegory? product.cetegory : "unknown"}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    
                ))
            }
        </div>
    )
}

export default ShowProducts;