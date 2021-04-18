import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../layouts/Navbar'

const Resetpassword = ({match}) => {

    const [values, setValues] = useState({
        email:'',password:'',cpassword:'',error: '', success: false
       });
   
       const {email,password,cpassword,success, error } = values;
    
       const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }
    
    const clickSubmit = (event) => {
        event.preventDefault();

        setValues({ ...values, error: false });
        const token = match.params.token
         
       fetch(`http://localhost:5000/api/resetpassword/${token}`,{
           method:"PUT",
        headers:{
            Accept:'application/json',
            "Content-Type":"application/json"
        },
        body:JSON.stringify(values)
       })
       .then(res => res.json())
         .then(data => {
   
           if (data.error) {
               setValues({ ...values, error: data.error, success: false })
           }
           else {
               setValues({
                   ...values,
                   error:'', success: true
               })
           }
   
           
         })
         .catch(err => console.log(err))
        
   
    }


    const showError=()=>(
           
        <div className="alert alert-danger" style={{display:error?'':'none'}}>
            {error}
        </div>
       
    );
   
    const showSuccess=()=>(
     
        <div className="alert alert-success" style={{display:success?'':'none'}}>
           Password has been reset successfully you can login to continue
        </div>
     
    );

    return (
        <>
        <Navbar/>
        <br/>

        <div className="banner-top">
            <div className="container">
                <h3 >Reset Password</h3>
                <h4><Link to="/">Home</Link><label>/</label>ResetPassword</h4>
                <div className="clearfix"> </div>
            </div>
        </div>

            <div className="login">
            
                <div className="main-agileits">
                        <div className="form-w3agile">
                            <h3>Reset Password</h3>
                            {showError()}
                            {showSuccess()}
                            <form>
                                <div className="key">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <input  type="text"  name="Email"  required="" onChange={handleChange('email')} value={email} />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="key">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                    <input  type="password"  name="Password" required="" onChange={handleChange('password')} value={password} />
                                    <div className="clearfix"></div>
                                </div>
                                <div className="key">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                    <input  type="password"  name="ConfirmPassword" required="" onChange={handleChange('cpassword')} value={cpassword} />
                                    <div className="clearfix"></div>
                                </div>
                                <button className="btn btn-primary" onClick={clickSubmit}>Reset Password</button>
                            </form>
                        </div>
                    </div>
                </div>
            
        </>
    )
}

export default Resetpassword
