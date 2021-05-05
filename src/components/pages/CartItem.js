import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { removeItem, updateItem } from './cartApi'

const CartItem = ({ product,
    cartUpdate = false,
    setRun = f => f,
    run = undefined }) => {
    const [count, setCount] = useState(product.count);


    const handleChange = productId => event => {
        setRun(!run); // run useEffect in parent Cart
        setCount(event.target.value < 1 ? 1 : event.target.value);
        if (event.target.value >= 1) {
            updateItem(productId, event.target.value);
        }
    };

    const showCartUpdateOptions = cartUpdate => {
        return (
            cartUpdate && (
                <div className="mb-2">

                    <span className="input-group-text">Adjust Quantity</span>

                    <input type="number" value={count} onChange={handleChange(product._id)} />

                </div>
            )
        );
    };
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

                        <div className="item-info-product ">
                            {showCartUpdateOptions(cartUpdate)}
                        </div>

                        <div className="snipcart-details top_brand_home_details item_add single-item hvr-outline-out">


                            <button className="btn btn-danger" onClick={() => {
                                removeItem(product._id);
                                setRun(!run); // run useEffect in parent Cart
                            }} >Remove from cart </button>


                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default CartItem