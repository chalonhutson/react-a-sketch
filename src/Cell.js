import { React, useState } from 'react'

export default function Cell({ color, palette }) {
    
    const [cellColor, setCellColor] = useState(color)
    const [cellPalette, setCellPalette] = useState(palette)

    function switchColor () {
        setCellColor(cellPalette)
    } 
  
    return (
    <div style={{backgroundColor: cellColor, width: '10px', height: '10px'}} onMouseEnter={() => switchColor()} >
        
    </div>
  )
}
