import React,{useRef} from 'react'
import Hex from './Hex'

const Lattice = ({ selectHexFunction, letters,activeHexID }) => {
  return (
    <svg viewBox="-80 -80 160 160" className="lattice" id="lattice">
      <Hex id="0" value={ letters[0] } activeHexID={activeHexID} selectHexFunction = {selectHexFunction} size={15} q={0} r={0} defaultFill="gold" />
      <Hex id="1" value={ letters[1] } activeHexID={activeHexID} selectHexFunction = {selectHexFunction} size={15} q={1} r={0} />
      <Hex id="2" value={ letters[2] } activeHexID={activeHexID} selectHexFunction = {selectHexFunction} size={15} q={0} r={1} />
      <Hex id="3" value={ letters[3] } activeHexID={activeHexID} selectHexFunction = {selectHexFunction} size={15} q={0} r={-1} />
      <Hex id="4" value={ letters[4] } activeHexID={activeHexID} selectHexFunction = {selectHexFunction} size={15} q={-1} r={1} />
      <Hex id="5" value={ letters[5] } activeHexID={activeHexID} selectHexFunction = {selectHexFunction} size={15} q={1} r={-1} />
      <Hex id="6" value={ letters[6] } activeHexID={activeHexID} selectHexFunction = {selectHexFunction} size={15} q={-1} r={0} />
    </svg>
  )
}

export default Lattice
