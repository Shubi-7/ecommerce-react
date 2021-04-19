import React, {Fragment} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {signout,isAuthenticated} from '../auth';


const Navbar=({history})=> {

    return (
        <>


            <div className="header">

            <div className="container">
                
                <div className="logo">
                    <h1 ><Link to="/">Free Store<span>The Best Supermarket</span></Link></h1>
                </div>
                <div className="head-t">
                    <ul className="card">
                        <li><Link to="wishlist.html" ><i className="fa fa-heart" aria-hidden="true"></i>Wishlist</Link></li>
                        {!isAuthenticated() &&(
                        <Fragment>
                            <li><Link to="/signin" ><i className="fa fa-user" aria-hidden="true"></i>Login</Link></li>
                            <li><Link to="/signup" ><i className="fa fa-arrow-right" aria-hidden="true"></i>Register</Link></li>
                        </Fragment>
                        )}

                        {isAuthenticated() && isAuthenticated().user.role===0 && (
                            <li>
                                <Link to="/user/dashboard"><i className="fa fa-user" aria-hidden="true"></i> Profile
                                </Link>
                            </li>
                        )}
                        {isAuthenticated() && isAuthenticated().user.role===1 &&(
                            <li>
                                <Link to="/admin/dashboard">
                                <i className="fa fa-user" aria-hidden="true"></i>
                                Admin dashboard
                                </Link>
                            </li>
                        )}
                        
                        {isAuthenticated()&&(
                            <Fragment>
                                <li>
                                <Link style={{cursor:'pointer', border:'none', outline:'none'}}
                                onClick={()=>signout(()=>{
                                    history.push('/');
                                })}>
                                <i className="fa fa-sign-out" aria-hidden="true"></i>
                                Sign Out</Link>
                                </li>
                            </Fragment>
                        )}

                        <li><Link to="about.html" ><i className="fa fa-file-text-o" aria-hidden="true"></i>Order History</Link></li>
                        <li><Link to="shipping.html" ><i className="fa fa-ship" aria-hidden="true"></i>Shipping</Link></li>
                    </ul>	
                </div>
                
                <div className="header-ri">
                    <ul className="social-top">
                        <li><Link to="#" className="icon facebook"><i className="fa fa-facebook" aria-hidden="true"></i><span></span></Link></li>
                        <li><Link to="#" className="icon twitter"><i className="fa fa-twitter" aria-hidden="true"></i><span></span></Link></li>
                        <li><Link to="#" className="icon pinterest"><i className="fa fa-pinterest-p" aria-hidden="true"></i><span></span></Link></li>
                        <li><Link to="#" className="icon dribbble"><i className="fa fa-dribbble" aria-hidden="true"></i><span></span></Link></li>
                    </ul>	
                </div>


                    <div className="nav-top">
                        <nav className="navbar navbar-default">
                        
                        <div className="navbar-header nav_2">
                            <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            

                        </div> 
                        <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
                            <ul className="nav navbar-nav ">
                                <li className=" active"><Link to="/" className="hyper "><span>Home</span></Link></li>	
                                
                                <li className="dropdown ">
                                    <Link to="#" className="dropdown-toggle  hyper" data-toggle="dropdown" ><span>Kitchen<b className="caret"></b></span></Link>
                                    <ul className="dropdown-menu multi">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Water & Beverages</Link></li>
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Fruits & Vegetables</Link></li>
                                                    <li><Link to="kitchen.html"> <i className="fa fa-angle-right" aria-hidden="true"></i>Staples</Link></li>
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Branded Food</Link></li>
                                            
                                                </ul>
                                            
                                            </div>
                                            <div className="col-sm-3">
                                            
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Breakfast &amp; Cereal</Link></li>
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Snacks</Link></li>
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Spices</Link></li>
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Biscuit &amp; Cookie</Link></li>
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Sweets</Link></li>
                                            
                                                </ul>
                                            
                                            </div>
                                            <div className="col-sm-3">
                                            
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Pickle & Condiment</Link></li>
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Instant Food</Link></li>
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Dry Fruit</Link></li>
                                                    <li><Link to="kitchen.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Tea &amp; Coffee</Link></li>
                                            
                                                </ul>
                                            </div>
                                            <div className="col-sm-3 w3l">
                                                <Link to="kitchen.html"><img src="images/me.png" className="img-responsive" alt=""/></Link>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>	
                                    </ul>
                                </li>
                                <li className="dropdown">
                                
                                    <Link to="#" className="dropdown-toggle hyper" data-toggle="dropdown" ><span> Personal Care <b className="caret"></b></span></Link>
                                    <ul className="dropdown-menu multi multi1">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i> Ayurvedic </Link></li>
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Baby Care</Link></li>
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Cosmetics</Link></li>
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Deo & Purfumes</Link></li>
                                            
                                                </ul>
                                                
                                            </div>
                                            <div className="col-sm-3">
                                                
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="care.html"> <i className="fa fa-angle-right" aria-hidden="true"></i>Hair Care </Link></li>
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Oral Care</Link></li>
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Personal Hygiene</Link></li>
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Skin care</Link></li>
                                            
                                                </ul>
                                                
                                            </div>
                                            <div className="col-sm-3">
                                                
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i> Fashion Accessories </Link></li>
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Grooming Tools</Link></li>
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Shaving Need</Link></li>
                                                    <li><Link to="care.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Sanitary Needs</Link></li>
                                            
                                                </ul>
                                            </div>
                                            <div className="col-sm-3 w3l">
                                                <Link to="care.html"><img src="images/me1.png" className="img-responsive" alt=""/></Link>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>	
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link to="#" className="dropdown-toggle hyper" data-toggle="dropdown" ><span>Household<b className="caret"></b></span></Link>
                                    <ul className="dropdown-menu multi multi2">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Cleaning Accessories</Link></li>
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>CookWear</Link></li>
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Detergents</Link></li>
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Gardening Needs</Link></li>
                                            
                                                </ul>
                                            
                                            </div>
                                            <div className="col-sm-3">
                                                
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Kitchen & Dining</Link></li>
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>KitchenWear</Link></li>
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Pet Care</Link></li>
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Plastic Wear</Link></li>
                                            
                                                </ul>
                                            
                                            </div>
                                            <div className="col-sm-3">
                                            
                                                <ul className="multi-column-dropdown">
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Pooja Needs</Link></li>
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Serveware</Link></li>
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Safety Accessories</Link></li>
                                                    <li><Link to="hold.html"><i className="fa fa-angle-right" aria-hidden="true"></i>Festive Decoratives </Link></li>
                                            
                                                </ul>
                                            </div>
                                            <div className="col-sm-3 w3l">
                                                <Link to="hold.html"><img src="images/me2.png" className="img-responsive" alt=""/></Link>
                                            </div>
                                            <div className="clearfix"></div>
                                        </div>	
                                    </ul>
                                </li>
                                
                                <li><Link to="codes.html" className="hyper"> <span>Codes</span></Link></li>
                                <li><Link to="contact.html" className="hyper"><span>Contact Us</span></Link></li>
                            </ul>
                        </div>
                        </nav>
                        <div className="cart" >
                        
                            <span className="fa fa-shopping-cart my-cart-icon"><span className="badge badge-notify my-cart-badge"></span></span>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                        
                    </div>			
            </div>
                        
        </>
    )
}

export default withRouter(Navbar)
