import React,{useState} from 'react'
import { Link, Redirect } from 'react-router-dom'
import {addItem} from './cartApi';


const Card = ({ product }) => {
    const [redirect, setRedirect] = useState(false);

	const addToCart = () => {
		// console.log('added');
		addItem(product, setRedirect(true));
	};

	const shouldRedirect = redirect => {
		if (redirect) {
			return <Redirect to="/cart" />;
		}
	};

    return (
        <>

            <div class="col-md-3 pro-1">
                <div class="col-m">
                    {shouldRedirect(redirect)}
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
                            <button class="btn btn-danger my-cart-btn my-cart-b"onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card