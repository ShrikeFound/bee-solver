import React from 'react'
import Hex from './Hex'

const Lattice = () => {
  return (
    <svg viewBox="-50 -50 100 100" className="lattice" id="lattice">
      <Hex size={15} q={0} r={0} />
      <Hex size={15} q={1} r={0} />
      <Hex size={15} q={0} r={1} />
      <Hex size={15} q={0} r={-1} />
      <Hex size={15} q={-1} r={1} />
      <Hex size={15} q={1} r={-1} />
      <Hex size={15} q={-1} r={0}/>
    </svg>
  )
}

export default Lattice
