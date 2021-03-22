import React,{useState,useRef,useEffect} from 'react'

import Lattice from './Lattice'

const App = () => {
  const letterInputRef = useRef();
  const [letters,setLetters] = useState(["l","t","o","e","n","p","u"])
  const [activeHex, setActiveHex] = useState(null);
  const URL = "https://raw.githubusercontent.com/AvonleaFisher/NYT-Spelling-Bee-Solver-Function/main/words.txt";
  const [wordList, setwordList] = useState(null);
  const [answerList, setAnswerList] = useState([]);

  const selectHex = (e) => {
    setActiveHex(e.target.parentNode);
    letterInputRef.current.focus();
  }

  const handleLetter = () => {

    if (letterInputRef.current.value.length !== 1 || letterInputRef.current.value.match(/\d/g)) {
      letterInputRef.current.value = ""
      return
    }
    console.log(letterInputRef.current.value)
    const letterArray = letters
    letterArray[activeHex.children[1].id] = letterInputRef.current.value.toLowerCase();
    letterInputRef.current.value = ""
    document.activeElement.blur();
    setLetters([...letterArray])
    setActiveHex(null)
  }

  useEffect( () => {
    const asyncFetch = async () =>{
    const response = await fetch(URL)
    const text = await response.text();
    const words = await text.split('\n').filter(w => {
      if (/[^a-z]/g.test(w)) {
        return false
      }
      return true
    });
    setwordList(await words)
      
    }
    asyncFetch();
  },[])

  const searchList = () => {
    if (wordList) {
      const reg = new RegExp(`[^${letters.join("")}]`,"g")
      console.log(reg)
      const answers = wordList.filter(w => {
        if (w.length > 3 && w.includes(letters[0])) {
          if (!w.match(reg)) {
            return true
          } else {
            return false
          }
        } else {
          return false;
        }
      })
      console.log(answers)
      setAnswerList(answers)
    }
  }

  const isPangram = (string,letters) =>{
    const result = letters.every(letter => string.includes(letter));
    return result
  }

  console.log(isPangram("",letters))
  console.log(answerList);
  return (
    <div>
      <div className="header-text">
      <h1>Bee Solver</h1>
        <h3>Puzzle Letters: {letters}</h3>
        <p>Click on a hex and type the letter you'd like to switch it to.</p>
      <input ref={letterInputRef} className="letter-input" defaultValue="" onChange={handleLetter}></input>
      <button className="button" onClick={ searchList }>Solve</button>
      </div>

      <div className="row">
        <div className="frame">
          <Lattice selectHexFunction={selectHex} letters={letters} activeHexID={activeHex ? activeHex.children[0].id : -1} />
        </div>
        <div>
        <ul className="word-list">
          {
              answerList.map(w => {
                if (w.include) {
                
              }
              return <li className={isPangram(w,letters) ? "pangram" : ""}>{w}</li>
            })
          }
          </ul>
          </div>
      </div>
    </div>
  )
}

export default App
