import React from 'react'

const imageClick = (e) => {
    alert('hi')
    console.log(e.target)
}

function Card({ele}) {
    
    return (
        <div className="card mb-4" style={{width: "18rem"}}>
  <img onClick={(e) => imageClick(e)} src = {ele.image_url} className="card-img-top" alt= {ele.image_name} />
  <div className="card-body">
    <h5 className="card-title">Contributor Name: {ele.contributor_name}</h5>
    <p>Image Name: {ele.image_name} </p>
    <p>Total Downloads: {ele.total_downloads} </p>
  </div>
</div>
    )
}

export default Card
