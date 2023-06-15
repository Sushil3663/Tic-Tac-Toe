import React from 'react'
import '../App.css'
const Block = ({mark,markChange,position}) => {

   
    return (
        <div
          className={`Block mark${mark}`}
          onClick={(e) => markChange(position)}
        ></div>
      );   
}

export default Block