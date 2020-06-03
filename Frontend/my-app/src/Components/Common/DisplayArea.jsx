import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getData} from '../../Redux/GetImages/Action'
import Card from './Card'

class DisplayArea extends Component {

    componentDidMount = () => {
        let token = this.props.token
        this.props.getData(token)
    }
    render() {
        const {user_type, data} = this.props
        console.log(data)
        return (
            <React.Fragment>
                {
                    user_type === "normal user" ?
                    ( <React.Fragment>
                        {/* <h1>Normal User</h1> */}
                        <div className="row">
                            {
                                data.image_record && data.image_record.map(ele => (
                                    <div className="col-6" key = {ele.id}>
                                        <Card ele = {ele} componentDidMount = {this.componentDidMount} />
                                    </div>

                                ))
                            }
                        </div>
                      </React.Fragment>
                    ):
                    (
                        <h2>Contributor</h2>
                    )
                }
            </React.Fragment>
            
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.authReducer.token,
    user_type: state.authReducer.user_type,
    isRequest: state.getImagesReducer.isRequest,
    isData: state.getImagesReducer.isData,
    data: state.getImagesReducer.data,

})

const mapDispatchToProps = (dispatch) => ({
    getData: (token) => dispatch(getData(token))
})

export default connect (mapStateToProps, mapDispatchToProps) (DisplayArea)

