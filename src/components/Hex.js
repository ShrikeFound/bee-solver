import React from 'react'

const Hex = ({ size,q,r }) => {
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
  console.log(p1,p2,p3,p4,p5,p6)
  return (
    <polygon className="hex" transform={`translate(${x},${y})`}  stroke="rgba(0,0,0,.01)" stroke-width="3" points={`${p1},${p2},${p3},${p4},${p5},${p6}`}>

    </polygon>
  )
}

export default Hex