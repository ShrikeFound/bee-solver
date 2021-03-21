import React,{useRef} from 'react'
import Hex from './Hex'

const Lattice = ({selectHexFunction}) => {

  return (
    <svg viewBox="-80 -80 160 160" className="lattice" id="lattice">
      <Hex selectHexFunction = {selectHexFunction} size={15} q={0} r={0} defaultFill="gold" />
      <Hex selectHexFunction = {selectHexFunction} size={15} q={1} r={0} />
      <Hex selectHexFunction = {selectHexFunction} size={15} q={0} r={1} />
      <Hex selectHexFunction = {selectHexFunction} size={15} q={0} r={-1} />
      <Hex selectHexFunction = {selectHexFunction} size={15} q={-1} r={1} />
      <Hex selectHexFunction = {selectHexFunction} size={15} q={1} r={-1} />
      <Hex selectHexFunction = {selectHexFunction} size={15} q={-1} r={0} />
    </svg>
  )
}

export default Lattice
