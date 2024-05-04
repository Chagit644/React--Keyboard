import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Keyboard from './components/Keyboard'
import LanguageLetters from './components/LanguageLetters'

function App() {
  const [currnetText, setCurrnetText] = useState([{ text: "", color: "black", size: "1" }])
  return (
    <>
      <Keyboard currnetText={currnetText} setCurrnetText={setCurrnetText} />
    </>
  )
}

export default App