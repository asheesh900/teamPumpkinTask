import React, { Component } from 'react'
import NormalUserSidebar from './NormalUserSidebar'
import ContributorSidebar from './ContributorSidebar'
import {connect} from 'react-redux'

class Sidebar extends Component {
    render() {
        const {user_type, data} = this.props        
        return (
            <React.Fragment>
                { 
                    user_type === "normal user" ?
                    (<NormalUserSidebar data = {data} />) : 
                    (<ContributorSidebar data = {data} />)
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    user_type: state.authReducer.user_type,
    data: state.getImagesReducer.data,

})

const mapDispatchToProps = {
    
}

export default connect (mapStateToProps, mapDispatchToProps) (Sidebar)
