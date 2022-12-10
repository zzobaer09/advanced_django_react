import axios from 'axios'
import React , {useState , useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import API_URL from './BackendDefaustUrls'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit';


const ProductDetail = () => {
    const [product , setProduct] = useState([])
    const {id} = useParams()
    const getProduct = async () => {
        const response = await axios.get(API_URL + `api/${id}/`)
        setProduct(response.data)
    }
    useEffect(()=>{
        getProduct()
        
    },[])
    const center_ = {

        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)'
    }
    return (
        <div id='container-view' style={center_}>
            <MDBCard>
                <MDBCardImage src={product.image} style={{width:"45%"}} id="img-view" alt='...' />
                <MDBCardBody>
                    <MDBCardTitle>name: {product.name}</MDBCardTitle>
                    <MDBCardTitle>price: {product.price}</MDBCardTitle>
                    <MDBCardTitle>category: {product.category}</MDBCardTitle>
                    <MDBCardText>
                        {product.description}
                    </MDBCardText>
                    <Link className='btn btn-primary m-2' to={`/${product.id}/update`}>Update</Link>
                    <Link className='btn btn-danger m-2' to="#">Delete</Link>
                </MDBCardBody>
            </MDBCard>
        </div>
  )
}

export default ProductDetail



