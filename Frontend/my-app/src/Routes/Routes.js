import React, { Component } from 'react'
import Navbar from '../Components/Common/Navbar'
import { Switch, Route } from 'react-router-dom'
import LogIn from '../Components/Auth/LogIn'
import Signup from '../Components/Auth/Signup'
import Home from '../Components/Common/Home'
import PrivateRoute from "./PrivateRoute"
import Dashboard from '../Components/Common/Dashboard'
import DownloadReport from '../Components/Common/DownloadReport'
import UploadImage from '../Components/Common/UploadImage'

export default class Routes extends Component {
    render() {
        return (
            <>
                <Navbar />
                <Switch>
                    <Route exact path = "/" component = {Home} />
                    <Route path = "/signup" component = {Signup} />
                    <Route path = "/logIn" component = {LogIn} />
                    <PrivateRoute path = "/dashboard" component = {props => <Dashboard {...props} />} />
                    <PrivateRoute path = "/uploadImage" component = {props => <UploadImage {...props} />} />
                    <PrivateRoute path = "/downloadReport" component = {props => <DownloadReport {...props} />} />
                </Switch>
            </>
        )
    }
}
