import { useState } from 'react'
import './App.css';
import Cell from './Cell'
import uuid from 'react-uuid'

function App() {

  const [numOfRows, setNumOfRows] = useState(50)
  const [numOfColumns, setNumOfColumns] = useState(50)
  const [paletteColor, setPaletteColor] = useState("red")
  
  const [rowsUserInput, setRowsUserInput] = useState()
  const [columnsUserInput, setColumnsUserInput] = useState()

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
          <h4>Choose # of Rows (default 50, max 150)</h4>
          <input onChange={e => {
            e.target.value < 150 ?
            setRowsUserInput(e.target.value) :
            setRowsUserInput(150)
            }
          } type="text" />
          <button onClick={() => setNumOfRows(rowsUserInput)}>Set Columns</button>
        </div>
        <div>
          <h4>Choose # of Columns (default 50, max 150)</h4>
          <input onChange={e => {
            e.target.value < 150 ? 
            setColumnsUserInput(e.target.value) : 
            setColumnsUserInput(150) 
            }
          } type="text" />
          <button onClick={() => setNumOfColumns(columnsUserInput)}>Set Columns</button>
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
