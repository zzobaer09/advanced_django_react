import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import API_URL from './BackendDefaustUrls';
import {useNavigate, useParams} from "react-router-dom"

const AddProduct = () => {
	const [Image , setImage] = useState(null)
	const [Name , setName] = useState("")
	const [Price , setPrice] = useState("")
	const [Description , setDescription] = useState("")
	const [Category , setCategory] = useState("")
	const navigate = useNavigate()
	
	const {id} = useParams()
	
	// const getProduct = async () => {
	// 	await axios.get(API_URL+`api/${id}/`).then(response => {
	// 		return response.data
	// 	}).then(data => {
	// 		setName(data.name)
	// 		setImage(data.image)
	// 		setPrice(data.price)
	// 		setDescription(data.description)
	// 		setCategory(data.category)
	// 	})

	// }

	// useEffect(()=>{
	// 	getProduct()
	// },[])

	const AddProductInfo = async () =>{


		let formField = new FormData()
		formField.append('name',Name)
		formField.append('price',Price)
		formField.append('description',Description)
		formField.append('category',Category)
		
		if (Image != null) {
		formField.append('image',Image)
		}

		
		await axios({
		method: 'POST',
		url: API_URL + `api/`,
		data:formField
		}).then(response => {
		console.log(response.data);
		navigate("/")
		})

	}

	return (
		<div>
		<div className='container'>
			<div className="w-75 mx-auto shadow p-5">
				<h2 className="text-center mb-4">Add A Student</h2>
				
				<div className='form-group'>
				{/* image */}
				<label>Select Image To Upload</label>
				<input
					type="file"
					name="image"
					className='form-control form-control-lg'
					onChange={e=>setImage(e.target.files[0])}
				/>
				</div>
				{/* !!!!!!!!!!!!!!!!!!!!!!! */}
				<div className='form-group'>
				<input
					type="text"
					name="name"
					className='form-control form-control-lg'
					placeholder="Enter Product Name"
					value={Name}
					onChange={e=>setName(e.target.value)}
				/>
				</div>

				<div className='form-group'>
				<input
					type="text"
					name="price"
					className='form-control form-control-lg'
					placeholder="Price of Product"
					value={Price}
					onChange={e=>setPrice(e.target.value)}
				/>
				</div>

				<div className='form-group'>
				<textarea
					type="text"
					name="description"
					className='form-control form-control-lg'
					placeholder="Description"
					value={Description}
					onChange={e=>setDescription(e.target.value)}
				/>
				</div>

				<div className='form-group'>
				<input
					type="text"
					name="category"
					className='form-control form-control-lg'
					placeholder="Category"
					value={Category}
					onChange={e=>setCategory(e.target.value)}
				/>
				</div>
				<Button className='btn btn-success' onClick={AddProductInfo}>Upload</Button>
			</div>
		</div>
		</div>
  	)
}

export default AddProduct
