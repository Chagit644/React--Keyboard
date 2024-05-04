import React from 'react'
import { saveStackForUndo } from './Keyboard'
const SizeButtonsToAll = (props) => {
  function toChangeSize(size) {
    let save = [...props.currnetText];
    saveStackForUndo.push(save);
    let saveCurrnetText = [...save];
    saveCurrnetText = saveCurrnetText.map(eachChar => {
      let currentChar = { ...eachChar };
      currentChar.size = size;
      return currentChar;
    })
    props.setCurrnetText(saveCurrnetText);
  }
  return (<>
    <button className='allTaxt' onClick={() => { toChangeSize(1) }}>s</button>
    <button className='allTaxt' onClick={() => { toChangeSize(1.5) }}>m</button>
    <button className='allTaxt' onClick={() => { toChangeSize(2) }}>l</button>
  </>
  )
}

export default SizeButtonsToAll