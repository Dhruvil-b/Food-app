import React from 'react'

const CustomImage = ({imgSrc, pt}) => {
  return (
    <div className='custome-image' style={{paddingTop: pt}}>
      <img src={imgSrc} alt=""  />
    </div>
  )
}

export default CustomImage
