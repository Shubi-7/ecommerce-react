import React from 'react'
import { Link } from 'react-router-dom'


const Card = ({ product }) => {



    return (
        <>

            <div class="col-md-3 pro-1">
                <div class="col-m">

                    <img src={`http://localhost:5000/${product.product_image}`} style={{ height: '180px', width: '200px' }} class="img-responsive" alt="" />

                    <div class="mid-1">
                        <div class="women">
                            <h6><Link to={`/productdetails/${product._id}`}>{product.product_name}</Link></h6>
                        </div>
                        <div class="mid-2">
                            <p ><em class="item_price">Rs.{product.product_price}</em></p>
                            <div class="block">
                                <div class="starbox small ghosting"> </div>
                            </div>
                            <div class="clearfix"></div>
                        </div>
                        <div class="add add-2">
                            <button class="btn btn-danger my-cart-btn my-cart-b">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card