import React from "react";

const selectCategory = (e) => {
  alert(e.target.value)
}

function NormalUserSidebar({ data }) {
   
  return (
    <React.Fragment>
      <h4>Category</h4>
      {data.image_categories &&
        data.image_categories.map((ele, i) => (
          <div className="form-check" key={i}>
            <input
              onClick = {selectCategory}
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

export default NormalUserSidebar;
