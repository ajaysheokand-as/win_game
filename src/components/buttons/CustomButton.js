import React from 'react';
import './CustomButton';

export const CustomButton = (props) => {
    const {title, type} = props;
  return (
    <div className={`btn btn-${type}`}>{title}</div>
  )
}

CustomButton.defaultProps = {
    title:"Button",
    type: "primary"
}