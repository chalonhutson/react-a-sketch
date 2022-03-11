import { useState } from 'react'
import './App.css';
import Cell from './Cell'
import uuid from 'react-uuid'

function App() {

  const [numOfRows, setNumOfRows] = useState(50)
  const [numOfColumns, setNumOfColumns] = useState(50)
  const [paletteColor, setPaletteColor] = useState("red")

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
          <h4>Choose # of Rows (max 150)</h4>
          <input onChange={e => {
            e.target.value < 150 ?
            setNumOfRows(e.target.value) :
            setNumOfRows(150)
            }
          } type="text" />
        </div>
        <div>
          <h4>Choose # of Columns (max 150)</h4>
          <input onChange={e => {
            e.target.value < 150 ? 
            setNumOfColumns(e.target.value) : 
            setNumOfColumns(150) 
            }
          } type="text" />
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
