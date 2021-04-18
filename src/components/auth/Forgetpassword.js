import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layouts/Navbar'

import {forgetpassword} from './index'

const Forgetpassword = () => {

	const[values,setValues]=useState({
        email:'',error:'',loading:false,success:false
       });
       const{email,loading,error,success}=values;
      
       const handleChange=name=>event=>{
         setValues({...values,error:false,[name]:event.target.value});
       }
     
       const clickSubmit=(event)=>{
           event.preventDefault();
           setValues({...values,error:false,loading:true});
           forgetpassword({email})
           .then(data=>{
               if(data.error){
                   setValues({...values,error:data.error,loading:false,success: false})
               }
               else{
                   
                setValues({
                    ...values,
                     email: '',  error: '', success: true
                })
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
		const showSuccess=()=>(
		
			<div className="alert alert-success" style={{display:success?'':'none'}}>
			password reset verification link has been sent to your email
			</div>
		
		);

    return (
        <>
<Navbar/>
        <br/>
        
        <div className="banner-top">
	<div className="container">
		<h3 >Forget Password</h3>
		<h4><Link to="/">Home</Link><label>/</label>ForgetPassword</h4>
		<div className="clearfix"> </div>
	</div>
</div>

	<div className="login">
	
		<div className="main-agileits">
				<div className="form-w3agile">
					<h3>Forget Password</h3>
					{showLoading()}
					{showSuccess()}
					{showError()}
					<form>
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text"  name="Email"  required="" onChange={handleChange('email')} value={email} />
							<div className="clearfix"></div>
						</div>
						<button className="btn btn-warning" onClick={clickSubmit} >Send Password Reset Link</button>
					</form>
				</div>
			</div>
		</div>
             
        </>
    )
}

export default Forgetpassword
