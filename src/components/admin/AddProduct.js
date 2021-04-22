import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layouts/Navbar'
import { getCategories, createProduct } from './apiAdmin'
import { isAuthenticated } from '../auth'


const AddProduct = () => {

    const { user, token } = isAuthenticated();
    const [values, setValues] = useState({
        product_name: '',
        product_description: '',
        product_price: '',
        categories: [],
        category: '',
        product_quantity: '',
        product_image: '',
        loading: false,
        error: '',
        success: false,
        redirectToProfile: false,
        formData: ''
    })
    const {
        product_name,
        product_description,
        product_price,
        categories,
        category,
        product_quantity,
        loading,
        error,
        success,
        redirectToProfile,
        formData

    } = values;

    //load categories and set form data
    const init = () => {
        getCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error })
            } else {
                setValues({ ...values, categories: data, formData: new FormData });
            }
        })
    }

    //to send form data
    useEffect(() => {
        init();
    }, [])

    const handleChange = name => event => {
        const value = name === 'product_image' ? event.target.files[0] : event.target.value
        formData.set(name, value)
        setValues({ ...values, [name]: value })
    }

    const clickSubmit = (event) => {
        event.preventDefault()
        setValues({ ...values, error: '', loading: true });
        createProduct(user._id, token, formData)
            .then(data => {
                if (data.error) {
                    setValues({ ...values, error: data.error })
                } else {
                    setValues({
                        ...values, name: '', description: '', product_image: '', price: '', quantity: '',
                        loading: false, success: true
                    });
                }

            });
    };


    const showError = () => (
        <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>
            {error}
        </div>

    );
    const showSuccess = () => (
        <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>
            <h4>Product is Created!</h4>
        </div>

    );

    const showLoading = () => (
        loading && (
            <div className="alert alert-success" >
                <h4>Loading....</h4>
            </div>
        )
    );

    return (
        <>
            <Navbar />
            <br />

            <div className="banner-top">
                <div className="container">
                    <h3 >Add Product</h3>
                    <h4><Link to="/">Home</Link><label>/</label><Link to="/admin/dashboard">AdminDashboard</Link><label>/</label>Add Product</h4>
                    <div className="clearfix"> </div>
                </div>
            </div>

            <div className="login">

                <div className="main-agileits">
                    <div className="form-w3agile">
                        <h3>Add Product</h3>
                        {showError()}
                        {showLoading()}
                        {showSuccess()}
                        <form>
                            <div className="key">
                                <input type="text" name="product" required="" placeholder="ProductName" onChange={handleChange('product_name')} />
                                <div className="clearfix"></div>
                            </div>

                            <div className="key">

                                <input type="text" name="price" required="" placeholder="Price" onChange={handleChange('product_price')} />
                                <div className="clearfix"></div>
                            </div>

                            <div className="key">

                                <input type="text" name="quantity" required="" placeholder="Quantity" onChange={handleChange('product_quantity')} />
                                <div className="clearfix"></div>
                            </div>


                            <div className="key">

                                <textarea className="form-control" name="description" required="" placeholder="Description" style={{ border: "none", resize: "none" }} onChange={handleChange('product_description')}></textarea>
                                <div className="clearfix"></div>
                            </div>

                            <div className="key">
                                <select onChange={handleChange('category')} className="form-control" >
                                    <option>Please select</option>
                                    {categories && categories.map((c, i) => (
                                        <option key={i} value={c._id}>{c.category_name}</option>

                                    ))}
                                </select>

                                <div className="clearfix"></div>
                            </div>


                            <div className="key">
                                <input type="file" name="product_image" className="form-control" accept="image/x-png,image/gif,image/jpeg" style={{ border: 'none' }} onChange={handleChange('product_image')} />
                                <div className="clearfix">

                                </div>

                            </div>






                            <button className="btn btn-success" onClick={clickSubmit}>Add</button>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
}

export default AddProduct
