import axios from 'axios'
import React , {useState , useEffect} from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import API_URL from './BackendDefaustUrls'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';


const ProductDetail = () => {
    const navigation = useNavigate()
    const [product , setProduct] = useState([])
    const {id} = useParams()
    const getProduct = async () => {
        const response = await axios.get(API_URL + `api/${id}/`)
        setProduct(response.data)
    }
    useEffect(()=>{
        getProduct()
        
    },[])
    const deleteProduct = async id => {
        await axios.delete(API_URL+`api/${id}/`)
        navigation("/")
    }
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
                    <Button className='btn btn-danger m-2' onClick={()=>deleteProduct(product.id)}>Delete</Button>
                </MDBCardBody>
            </MDBCard>
        </div>
  )
}

export default ProductDetail



