import React,{useState,useRef,useEffect} from 'react'

import Lattice from './Lattice'

const App = () => {
  const letterInputRef = useRef();
  const [letters,setLetters] = useState(["L","T","O","E","N","P","U"])
  const [activeHex, setActiveHex] = useState(null);
  const URL = "https://raw.githubusercontent.com/dwyl/english-words/master/words.txt";
  const wordList

  const selectHex = (e) => {
    setActiveHex(e.target.parentNode);
    letterInputRef.current.focus();
  }

  const handleLetter = () => {
    if (letterInputRef.current.value.length !== 1) return;
    console.log(letterInputRef.current.value)
    // activeHex.children[1].textContent = letterInputRef.current.value
    const letterArray = letters
    letterArray[activeHex.children[1].id] = letterInputRef.current.value.toUpperCase();
    setLetters([...letterArray])
    letterInputRef.current.value = ""
  }
  useEffect(async () => {
    const asyncFetch = async () =>{
    const response = await fetch(URL)
    const text = await response.text();
    const words = await text.split('\n').filter(w => {
      if (/[^a-z]/g.test(w)) {
        return false
      }
      return true
    });
    console.log(words)
      
    }
    asyncFetch();
  },[])


  return (
    <div>
      <h1>Bee Solver</h1>
      <h3>{activeHex ? activeHex.getAttribute("transform") : null}</h3>
      <h3>{ letters}</h3>
      <input ref={letterInputRef} className="letter-input" defaultValue="" onChange={handleLetter}></input>
      <div className="frame">
        <Lattice selectHexFunction={selectHex} letters={letters} activeHexID={activeHex ? activeHex.children[0].id : -1} />
      </div>
    </div>
  )
}

export default App
