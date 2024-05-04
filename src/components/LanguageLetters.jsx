import React from 'react'
import './LanguageLetters.CSS'
import { saveStackForUndo } from './Keyboard'
const LanguageLetters = (props) => {
  function showLetters(oneChar) {
    saveStackForUndo.push(props.currnetText);
    let saveCurrnetText = [...props.currnetText];
    let tav = oneChar;
    saveCurrnetText.push({
      text: tav,
      color: props.currnetColor,
      size: props.currnetSize
    })
    props.setCurrnetText(saveCurrnetText);
  }
  return (<>
    {props.language.map((oneChar, key) => {
      return <button key={key} onClick={() => showLetters(oneChar)}>{oneChar}</button>
    })}
  </>

  )
}

export default LanguageLetters