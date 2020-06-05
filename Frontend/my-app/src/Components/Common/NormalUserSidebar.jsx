import React from "react";
import {connect} from 'react-redux';
import {filterCategory} from '../../Redux/GetImages/Action'


class NormalUserSidebar extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  selectCategory = (e) => {
    // alert(e.target.value)
    this.props.filterCategory(e.target.value)
  }
  
   
  render() {
    const {data} = this.props
    return (
      <React.Fragment>
        <h4>Category</h4>
        <div className="form-check" >
              <input
                onClick = {this.selectCategory}
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value= "all"
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                All
              </label>
            </div>
        {data.image_categories &&
          data.image_categories.map((ele, i) => (
            <div className="form-check" key={i}>
              <input
                onClick = {this.selectCategory}
                className="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value={ele.image_category}
              />
              <label className="form-check-label" htmlFor="exampleRadios1">
                {ele.image_category}
              </label>
            </div>
          ))}
      </React.Fragment>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  filterCategory: (category) => dispatch(filterCategory(category))
})

export default connect (null, mapDispatchToProps) (NormalUserSidebar)
