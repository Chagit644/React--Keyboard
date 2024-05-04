import React, { useState } from 'react'
import { saveStackForUndo } from './Keyboard'

const ColorButtonsToAll = (props) => {
  function changeColor(color) {
    let save = [...props.currnetText];
    saveStackForUndo.push(save);
    let saveCurrnetText = [...save];
    saveCurrnetText = saveCurrnetText.map(eachChar => {
      let currentChar = { ...eachChar };
      currentChar.color = color;
      return currentChar;
    })
    props.setCurrnetText(saveCurrnetText);
  }
  return (<>
    <button className='allTaxt' onClick={() => { changeColor("red") }}>🟥</button>
    <button className='allTaxt' onClick={() => { changeColor("green") }}>🟩</button>
    <button className='allTaxt' onClick={() => { changeColor("black") }}>⬛</button>
  </>
  )
}

export default ColorButtonsToAll