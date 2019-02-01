import React from "react";
import Square from "./Square/Square";

let Board = (props) => {
    let onClickSquare = (ev)=> {
      let squareId = ev.target.getAttribute("squareid");
      if(!squareId) {
        return
      }
      props.onClick(squareId)
    }
    return (
      <div onClick={onClickSquare} id="board">
        <div className="boardRow">
          <Square id = {0} value={props.squares[0]} />
          <Square id = {1} value={props.squares[1]} />
          <Square id = {2} value={props.squares[2]} />
        </div>
        <div className="boardRow">
          <Square id = {3} value={props.squares[3]} />
          <Square id = {4} value={props.squares[4]} />
          <Square id = {5} value={props.squares[5]} />
        </div>
        <div className="boardRow">
          <Square id = {6} value={props.squares[6]} />
          <Square id = {7} value={props.squares[7]} />
          <Square id = {8} value={props.squares[8]} />
        </div>
      </div>
    )
  }

  export default Board;