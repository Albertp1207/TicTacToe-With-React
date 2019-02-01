import React, { Component } from 'react';
import "./index.css";
import Board from "./components/Board/Board";
import HistoryTable from "./components/HistoryTable/HistoryTable";

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      squares:[null,null,null,null,null,null,null,null,null],
      xIsNext:true,
      history:[],
      winner:null,
      m:0,
      c:0
    }
    this.clickSquare=  this.clickSquare.bind(this);
  }
  chechWin(squares){
    const  trueOptions= [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let winner = null;
    trueOptions.forEach(square=>{
      let [x,y,z] = square
      if(squares[x] && squares[x] === squares[y] && squares[y] === squares[z]) {
        winner = squares[x];
        return;
      }
    })
    if(!winner && this.state.history[8]){
      winner = "===="
    }
    if(winner) {
      this.endGame(winner)
    }
  }
  endGame(winner){
    this.setState({winner:winner})
    alert(winner)
  }
  componentDidUpdate(){
    if(this.state.winner) return;
    this.chechWin(this.state.squares);    
  }
  clickSquare(i){
    // console.log(this)
    let {winner,squares,xIsNext,m,c} = this.state;
    if(winner){
      alert("THE GAME IS OVER, Winner: "+winner)
      return
    }

    let newSquares 
    let newHistory;
    if(squares[i]) {
      return
    }
    if(m>c) {
      m=c;
      newHistory = this.state.history.slice(0,m+1);
      newSquares = [null,null,null,null,null,null,null,null,null];
      newHistory.forEach((el,i)=>{
        if(i%2===0) {
          newSquares[el]="X"
        } else {
          newSquares[el]="O"
        }
      })
      
    } else {
      newHistory = this.state.history.slice();
      newSquares = squares.slice();
    }    
    m++;
    newHistory.push(i);
    newSquares[i] = xIsNext ? "X" : "O"
    this.setState({xIsNext:!this.state.xIsNext,history:newHistory,m:m,c:m,squares:newSquares})
  }
  goBack=(y)=>{
    console.log(this.state.history);
    // console.log(y);
    let newSquares = [null,null,null,null,null,null,null,null,null];
    let noHistory = this.state.history.slice(y+1)
    let newHistory = this.state.history.slice(0,y+1);
    let xIsNext = y%2!==0;
    noHistory = noHistory.map(el=>null)
    newHistory.forEach((el,i)=>{
      if(i%2===0) {
        newSquares[el]="X"
      } else {
        newSquares[el]="O"
      }
    })
    newHistory =newHistory.concat(noHistory);
    this.setState({squares:newSquares,winner:null,xIsNext:xIsNext,c:y})
    console.log(this);
    // squares[n] = null;
    // this.setState({squares:squares})
    // let xin =true;
    // if(y%2==0) {
    //   xin = false;
    // this.setState({xIsNext:xin})

  }
  render(){
    return (
      <div>
        <Board squares={this.state.squares} onClick = {this.clickSquare}  />
        <HistoryTable arr={this.state.history} onClick = {this.goBack}  />
        {/* <button onClick={this.goBack.bind(this,3)}>3</button> */}
      </div>
    )
  }
  
}

export default App;
