import React from 'react'
import { useState } from 'react';
import { saveStackForUndo } from './Keyboard'
export let language = {
  hebrew: ["ק", "ר", "א", "ט", "ו", "ן", "ם", "פ", "ש", "ד", "ג", "כ", "ע", "י", "ח", "ל", "ך", "ף", "ז", "ס", "ב", "ה", "נ", "מ", "צ", "ת", "ץ", " ", , "↩️"],
  english_capital: ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', " ", "↩️"],
  english: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', " ", "↩️"],
  Emojis: ["😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊", "😋", "😎", "😍", "😘", "🥰", "🤩", "🤗", "😜", "😝", "🙈", "❤️", " ", "↩️"],
  numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "?", ":", ",", "&", "%", "$", "#", "@", "!", " "]
};
const SizeButtons = (props) => {

  return (<div>
    <button className='buttunsDoLetters' onClick={() => {
      props.setcurrnetLanguage(language.english)
    }}>English</button>
    <button className='buttunsDoLetters' onClick={() => {
      props.setcurrnetLanguage(language.english_capital)
    }}>ENGLISH</button>
    <button className='buttunsDoLetters' onClick={() => {
      props.setcurrnetLanguage(language.hebrew)
    }}>עברית</button>
    <button className='buttunsDoLetters' onClick={() => {
      props.setcurrnetLanguage(language.Emojis)
    }}>🤩</button>
    <button className='buttunsDoLetters' onClick={() => {
      props.setcurrnetLanguage(language.numbers)
    }}>1&%#</button> </div>

  )
}

export default SizeButtons