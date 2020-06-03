import React, { Component } from 'react'
import DisplayArea from './DisplayArea'

export default class Dashboard extends Component {
    render() {
        return (
            <div className = "container">
                <h1 className = "text-center">Dashboard</h1>
                <div className="row">
                    <div className="col-3 bg-primary mr-2">Category</div>
                    <div className="col-8 bg-secondary">
                        <DisplayArea />
                    </div>
                </div>
                
            </div>
        )
    }
}
