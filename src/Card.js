import React from 'react';

const Card = ({ images }) => {
  return(
    <React.Fragment>
      {images.map((image, index) => {
        return(
          <div className="card" key={index} style={{background: `url("${image.url}") no-repeat center/cover`}}>
          </div>
        )
        
      } )}
    </React.Fragment>
  )
}

export default Card