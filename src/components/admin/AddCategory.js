import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth'
import Navbar from '../layouts/Navbar'
import { createCategory } from './apiAdmin'

const AddCategory = () => {

	const [category_name, setName] = useState('')
	const [error, setError] = useState(false)
	const [success, setSuccess] = useState(false)

	//destructure user and token from localstorage
	const { user, token } = isAuthenticated()


	const handleChange = (e) => {
		setError('')
		setName(e.target.value)

	}

	const clickSubmit = (e) => {
		e.preventDefault()
		setError('')
		setSuccess(false)
		//make request to api to create category
		createCategory(user._id, token, { category_name })
			.then(data => {
				if (data.error) {
					setError(data.error);
				}
				else {
					setError("");
					setSuccess(true);
				}
			})

	}

	const showSuccess=()=>{
		if(success){
		   return <h5 align="center" className="text-success">Category is Added</h5> 
		}
	}

	const showError=()=>{
		if(error){
			return <h5 align="center" className="text-danger">{error}</h5>
		}
	}

	return (
		<>
			<Navbar />
			<br />

			<div className="banner-top">
				<div className="container">
					<h3 >Add Category</h3>
					<h4><Link to="/">Home</Link><label>/</label><Link to="/admin/dashboard">AdminDashboard</Link><label>/</label>Add Category</h4>
					<div className="clearfix"> </div>
				</div>
			</div>

			<div className="login">

				<div className="main-agileits">
					<div className="form-w3agile">
						<h3>Add Category</h3>
						{showError()}
						{showSuccess()}
						<br/>
						<form>
							<div className="key">
								<input type="text" name="category" required="" onChange={handleChange} value={category_name} />
								<div className="clearfix"></div>
							</div>

							<button className="btn btn-success" onClick={clickSubmit}>Add</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default AddCategory
