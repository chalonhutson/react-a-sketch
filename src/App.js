import { useState } from 'react'
import './App.css';
import Cell from './Cell'
import uuid from 'react-uuid'

function App() {

  const [numOfRows, setNumOfRows] = useState(25)
  const [numOfColumns, setNumOfColumns] = useState(25)
  const [paletteColor, setPaletteColor] = useState("red")

  function handleChangeRows () {

  }

  function returnRows() {
    const arrayOfRows = []
    for (let i = 0; i < numOfRows; i++) {
      arrayOfRows.push(<Cell key={uuid()} color="white" palette={paletteColor} />)
    }
    return arrayOfRows
  }

  function returnColumns () {
    const arrayOfColumns = []
    for (let i = 0; i < numOfColumns; i++) {
      arrayOfColumns.push(
        <div className="cellRow">
          {returnRows()}
        </div>
      )
    }
    return arrayOfColumns
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="text" />
          <button>Change Rows</button>
        </div>
        <div>
          <h4>Pick Palette Color</h4>
          <button onClick={() => setPaletteColor("red")} >Red</button>
          <button onClick={() => setPaletteColor("blue")} >Blue</button>
          <button onClick={() => setPaletteColor("yellow")} >Yellow</button>
          <button onClick={() => setPaletteColor("black")} >Black</button>
          <button onClick={() => setPaletteColor("white")} >White</button>
        </div>
        <div className="columnContainer" >
          {returnColumns()}
        </div>
      </header>
    </div>
  );
}

export default App;
