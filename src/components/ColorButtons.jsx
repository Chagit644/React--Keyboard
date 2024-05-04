import React from 'react'
import { useState } from 'react';
import { saveStackForUndo } from './Keyboard'
const ColorButtons = (props) => {
  return (<>
    <button className='buttunsDoLetters' onClick={() => {
      saveStackForUndo.push(props.currnetColor);
      props.setccurrnetColor("red")
    }}>🟥</button>
    <button className='buttunsDoLetters' onClick={() => {
      saveStackForUndo.push(props.currnetColor);
      props.setccurrnetColor("green")
    }}>🟩</button>
    <button className='buttunsDoLetters' onClick={() => {
      saveStackForUndo.push(props.currnetColor);
      props.setccurrnetColor("black")
    }}>⬛</button>
  </>
  )
}

export default ColorButtons