import React,{useState} from 'react'
import Lattice from './Lattice'

const App = () => {
  const [activeHex, setActiveHex] = useState(null);
  if (activeHex) {
  }
  const selectHex = (e) => {
    setActiveHex(e.target.parentNode);
  }



  return (
    <div>
      <h1>Bee Solver</h1>
      <h3>{activeHex ? activeHex.getAttribute("transform")   : null}</h3>
      <div className="frame">
        <Lattice selectHexFunction={selectHex} />
      </div>
    </div>
  )
}

export default App
