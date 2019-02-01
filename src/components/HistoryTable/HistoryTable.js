import React from "react"

export default props => {
    let lis = props.arr.map((li,i)=><li key={i}onClick={()=>props.onClick(i)}>go back to {i+1}</li>)  
    return (
      <ul id="hisUl">
        {lis}
      </ul>
    )
}

