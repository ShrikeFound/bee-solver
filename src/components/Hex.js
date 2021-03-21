import React from 'react'

const Hex = ({ size,q,r,selectHexFunction,defaultFill = "white" }) => {
  const height = Math.sqrt(3)*size;
  const width = size * 2
  const x = (q*1.1) * width * .75
  const y = ((r*1.1) * Math.sqrt(3)*size) + ((q*1.1)*height/2)
  const p1 = `${(size/-2)},${(size/-2)*Math.sqrt(3)}`
  const p2 = `${size*-1},0`
  const p3 = `${(size/2)*-1},${(size/2)*Math.sqrt(3)}`
  const p4 = `${(size/2)},${(size/2)*Math.sqrt(3)}`
  const p5 = `${size*1},0`
  const p6 = `${(size/2)},${(size/-2)*Math.sqrt(3)}`
  return (
    <g transform={`translate(${x},${y})`}>
    <polygon
        onClick={(e) => selectHexFunction(e)}
        fill={defaultFill}
      className="hex"
      stroke="rgba(0,0,0,.1)" strokeWidth="2" points={`${p1},${p2},${p3},${p4},${p5},${p6}`}>
      </polygon>
      <text transform="translate(0,1)" fontSize="3px" textAnchor="middle">
        Default
      </text>
      </g>
  )
}

export default Hex