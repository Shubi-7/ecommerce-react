import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../layouts/Navbar';

// import Signin from './Signin'

const Confirm=({match})=> {
    const [values, setValues] = useState({
     error: '', success: false
    });

    const {success, error } = values;
    useEffect(()=>{

        const token = match.params.token
      console.log(token)
    fetch(`http://localhost:5000/api/confirmation/${token}`,{
        method:"POST",
     headers:{
         Accept:'application/json',
         "Content-Type":"application/json"
     }
    })
    .then(res => res.json())
      .then(data => {

        if (data.error) {
            setValues({ ...values, error: data.error, success: false })
        }
        else {
            setValues({
                ...values,
                error: '', success: true
            })
        }

        
      })
      .catch(err => console.log(err))
     


     

    },[match.params.token,values])

    const showError=()=>(
        
        <div className="alert alert-danger" style={{display:error?'':'none'}}>
            {error}
        </div>
       
    );
   
    const showSuccess=()=>(
     
        <div className="alert alert-success" style={{display:success?'':'none'}}>
            Congrats your Account is verified you can sign in to continue .......
        </div>
     
    );

    return (
        <>
   <Navbar/>
            


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
                    {showSuccess()}
					<form>
						<div className="key">
							<i className="fa fa-envelope" aria-hidden="true"></i>
							<input  type="text"  name="Email"  required=""/>
							<div className="clearfix"></div>
						</div>
						<div className="key">
							<i className="fa fa-lock" aria-hidden="true"></i>
							<input  type="password"  name="Password" required=""/>
							<div className="clearfix"></div>
						</div>
						<input type="submit" value="Login"/>
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

export default Confirm