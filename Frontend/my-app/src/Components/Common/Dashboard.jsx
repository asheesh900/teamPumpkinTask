import React, { Component } from 'react'
import DisplayArea from './DisplayArea'
import {connect} from 'react-redux'
import Sidebar from './Sidebar'

class Dashboard extends Component {
    render() {
        return (
            <div className = "container">
                <h1 className = "text-center">Dashboard</h1>
                <div className="row">
                    <div className="col-3 bg-primary mr-2">
                        <Sidebar />
                    </div>
                    <div className="col-8 bg-secondary">
                        <DisplayArea />
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user_type: state.authReducer.user_type,

})

const mapDispatchToProps = {
    
}

export default connect (mapStateToProps, mapDispatchToProps) (Dashboard)

