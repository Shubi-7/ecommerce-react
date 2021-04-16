import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Confirm from './components/auth/Confirm'
import Forgetpassword from './components/auth/Forgetpassword'
import Resetpassword from './components/auth/Resetpassword'
import Signin from './components/auth/Signin'
import Signup from './components/auth/Signup'
import UserDashboard from './components/auth/UserDashboard'
import Homepage from './components/pages/Homepage'
import PrivateRoute from './components/auth/PrivateRoute'
import AdminRoute from './components/auth/AdminRoute'
import AdminDashboard from './components/auth/AdminDashboard'

const Routes=()=> {
    return (
        <>
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/signin" component={Signin}/>
                <Route exact path="/forget/password" component={Forgetpassword}/>
                <Route exact path="/reset/password" component={Resetpassword}/>
                <Route exact path="/email/confirmation/:token" component={Confirm}/>
                
                <PrivateRoute exact path="/user/dashboard" component={UserDashboard} />
                <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />

            </Switch>
        </Router>

            
        </>
    )
}

export default Routes
