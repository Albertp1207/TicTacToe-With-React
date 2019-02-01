import React from "react";


export default props => {
    return (
      <div squareid = {props.id}  className = "square " onClick = {props.onClick}>
        <label>{props.value}</label>    
      </div>
    )
}