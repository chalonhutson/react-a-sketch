import { useState } from 'react'
import './App.css';
import Cell from './Cell'

function App() {

  console.log("Thanks for checking out my project!!! You are awesome!!!")

  const [numOfRows, setNumOfRows] = useState(50)
  const [numOfColumns, setNumOfColumns] = useState(50)
  const [paletteColor, setPaletteColor] = useState("red")

  function returnColumns(rowKey) {
    const arrayOfColumns = []
    for (let i = 0; i < numOfColumns; i++) {
      arrayOfColumns.push(<Cell key={`Row ${rowKey} Column ${i}`} color="white" paletteColor={paletteColor} />)
    }
    return arrayOfColumns
  }

  function returnRows () {
    const arrayOfRows = []
    for (let i = 0; i < numOfRows; i++) {
      arrayOfRows.push(
        <div key={`Row ${i}`} className="cellRow">
          {returnColumns(i)}
        </div>
      )
    }
    return arrayOfRows
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-a-Sketch</h1>
        <div className="inputContainer">
          <div className="inputDiv">
            <h4 className="inputLabel">Height</h4>
            <input type="range" min="1" max="150" onChange={(e) => setNumOfRows(e.target.value)} />
          </div>
          <div className="inputDiv">
            <h4 className="inputLabel">Width</h4>
            <input type="range" min="1" max="150" onChange={(e) => setNumOfColumns(e.target.value)} />
          </div>
        </div>
        <div className="colorBtnContainer">
          <h4>Pick Palette Color</h4>
          <div id="btnsContainer">
          <button style={{backgroundColor:"red"}} className="colorBtn" onClick={() => setPaletteColor("red")} >{paletteColor==="red" ? "X" : null}</button>
          <button style={{backgroundColor:"blue"}} className="colorBtn" onClick={() => setPaletteColor("blue")} >{paletteColor==="blue" ? "X" : null}</button>
          <button style={{backgroundColor:"yellow"}} className="colorBtn" onClick={() => setPaletteColor("yellow")} >{paletteColor==="yellow" ? "X" : null}</button>
          <button style={{backgroundColor:"green"}} className="colorBtn" onClick={() => setPaletteColor("green")} >{paletteColor==="green" ? "X" : null}</button>
          </div>
          <div id="btnsContainer">
          <button style={{backgroundColor:"pink"}} className="colorBtn" onClick={() => setPaletteColor("pink")} >{paletteColor==="pink" ? "X" : null}</button>
          <button style={{backgroundColor:"orange"}} className="colorBtn" onClick={() => setPaletteColor("orange")} >{paletteColor==="orange" ? "X" : null}</button>
          <button style={{backgroundColor:"black"}} className="colorBtn" id="colorBtnBlack"  onClick={() => setPaletteColor("black")} >{paletteColor==="black" ? "X" : null}</button>
          <button className="colorBtn" id="colorBtnErase" onClick={() => setPaletteColor("white")} >Erase</button>
        </div>
        </div>
        <div className="canvasContainer" >
          {returnRows()}
        </div>
      </header>
    </div>
  );
}

export default App;
