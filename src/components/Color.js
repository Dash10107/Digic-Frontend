import React from "react";
import colors from 'color-name';

const Color = ({colorName}) => {

  if (colors[colorName]) {
    return (

        
          <li style={{backgroundColor: colorName}}></li>

    );

  }else
  {
    return (
          <li style={{backgroundColor: "black"}}></li>

    );
  }
};

export default Color;