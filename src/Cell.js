import { React, useState } from 'react'

export default function Cell({ color, paletteColor }) {
    
    const [cellColor, setCellColor] = useState(color)
  
    return (
    <div
      style={{backgroundColor: cellColor, width: '5px', height: '5px'}}
      onMouseEnter={() => setCellColor(paletteColor)}
    >
    
    </div>
  )
}
