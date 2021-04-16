import React,{useState} from 'react'
import Navbar from '../layouts/Navbar'
import {Link, Redirect} from 'react-router-dom'
import {signin,authenticate,isAuthenticated} from './index'

const Signin = () => {
	
	const[values,setValues]=useState({
        email:'', password:'',error:'',loading:false,redirectToReferrer:false,
       });
       const{email,password,loading,error,redirectToReferrer}=values;
       
       const {user} =isAuthenticated();
       
       const handleChange=name=>event=>{
         setValues({...values,error:false,[name]:event.target.value});
       }
     
       const clickSubmit=(event)=>{
           event.preventDefault();
           setValues({...values,error:false,loading:true});
           signin({email,password})
           .then(data=>{
               if(data.error){
                   setValues({...values,error:data.error,loading:false})
               }
               else{
                   authenticate(data,()=>{
                    setValues({
                        ...values,
                       redirectToReferrer:true
                     });
                });
               }
           });
       };

		const showError=()=>(
			<div className="alert alert-danger mb-3" style={{display:error?'':'none'}}>
				{error}
			</div>
		);
		
		const showLoading=()=>
		loading&&(<div className="alert alert-info">
			<h2>Loading....</h2>
		</div>
		);

		const redirectUser=()=>{
			if(redirectToReferrer){
			   if(user && user.role===1){
				   return <Redirect to="/admin/dashboard" />
			   } else{
				   return <Redirect to="/user/dashboard" /> 
			   }
			}
			if(isAuthenticated()){
				return <Redirect to="/" /> 
			}
			
			   
			
		}


    return (
        <>
        <Navbar/>
        <br/>
        
        <div className="banner-top">
	<div className="container">
		<h3 >Login</h3>
		<h4><Link to="/">Home</Link><label>/</label>Login</h4>
		<div className="clearfix"> </div>
	</div>
</div>

	<div className="login">
	
		<div className="main-agileits">
				<div className="form-w3agile">
					<h3>Login</h3>
					{showError()}
					{showLoading()}
					{redirectUser()}
					<form>
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text"  name="Email"  required="" onChange={handleChange('email')} value={email}/>
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password"  name="Password" required="" onChange={handleChange('password')} value={password} />
							<div className="clearfix"></div>
						</div>
						<button className="btn btn-warning" onClick={clickSubmit}>Login</button>
					</form>
				</div>
				<div className="forg">
					<Link to="/forget/password" className="forg-left">Forgot Password</Link>
					<Link to="/signup" className="forg-right">Register</Link>
				<div className="clearfix"></div>
				</div>
			</div>
		</div>
            
        </>
    )
}

export default Signin
