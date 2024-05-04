import React from 'react'
import { useState } from 'react';
import { saveStackForUndo } from './Keyboard'

const SizeButtons = (props) => {
  return (<>

    <button className='buttunsDoLetters' onClick={() => {
      saveStackForUndo.push(props.currnetSize);
      props.setccurrnetSize("1")
    }}>s</button>
    <button className='buttunsDoLetters' onClick={() => {
      saveStackForUndo.push(props.currnetSize);
      props.setccurrnetSize("1.5")
    }}>m</button>
    <button className='buttunsDoLetters' onClick={() => {
      saveStackForUndo.push(props.currnetSize);
      props.setccurrnetSize("2")
    }}>l</button>
  </>
  )
}

export default SizeButtons