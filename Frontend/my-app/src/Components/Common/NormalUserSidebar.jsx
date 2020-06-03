import React from 'react'

function NormalUserSidebar({data}) {
    data && console.log(data)
    return (
        <React.Fragment>
            <h4>Category</h4>
            {
                data.image_record && data.image_record.map(ele => (
                    <div className="form-group form-check" key = {ele.id}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1">{ele.image_category}</label>
                    </div>
                ))
            }
        </React.Fragment>
    )
}

export default NormalUserSidebar
