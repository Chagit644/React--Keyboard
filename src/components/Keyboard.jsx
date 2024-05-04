import React from 'react'
import { useState } from 'react';
import LanguageLetters from './LanguageLetters'
import ColorButtons from './ColorButtons';
import SizeButtons from './SizeButtons';
import LanguageButtons from './LanguageButtons';
import ColorButtonsToAll from './ColorButtonsToAll';
import SizeButtonsToAll from './SizeButtonsToAll';
import { language } from './LanguageButtons';
import './Keyboard.css';
export let saveStackForUndo = [];

const Keyboard = (props) => {

  const [currnetLanguage, setcurrnetLanguage] = useState(language.english)
  const [currnetColor, setccurrnetColor] = useState(props.currnetText[props.currnetText.length - 1].color)
  const [currnetSize, setcurrnetSize] = useState(props.currnetText[props.currnetText.length - 1].size)
  const [toShowButtuns, settoShowButtuns] = useState("false");
  const [currentAlign, setCurrentAlign] = useState("center");

  function deleteChar() {
    saveStackForUndo.push(props.currnetText);
    if (props.currnetText.length == 1) {
      props.setCurrnetText([{ text: "", color: currnetColor, size: currnetSize }]);
    }
    else {
      props.setCurrnetText(props.currnetText.slice(0, -1));
    }
  }
  function deleteAll() {
    saveStackForUndo.push(props.currnetText);
    props.setCurrnetText([{ text: "", color: currnetColor, size: currnetSize }]);
  }
  function undo() {
    if ([...saveStackForUndo].length > 0) {
      let eachPop = saveStackForUndo.pop();
      if (eachPop == "red" || eachPop == "green" || eachPop == "black") {
        setccurrnetColor(eachPop);
      }
      else if (eachPop == "1" || eachPop == "1.5" || eachPop == "2") {
        setcurrnetSize(eachPop);
      }
      else if (eachPop == "right" || eachPop == "left" || eachPop == "center") {
        setCurrentAlign(eachPop);
      }
      else {
        props.setCurrnetText(eachPop)
      }
    }
  }
  function upper() {
    let save = [...props.currnetText];
    saveStackForUndo.push(save);
    let saveCurrnetText = [...save];
    saveCurrnetText = saveCurrnetText.map(eachChar => {
      let saveChar = { ...eachChar };
      if (!saveChar.text.isLowerCase) { saveChar.text = saveChar.text.toUpperCase(); } return saveChar;
    })
    props.setCurrnetText(saveCurrnetText);
  }
  function lower() {
    let save = [...props.currnetText];
    saveStackForUndo.push(save);
    let saveCurrnetText = [...save];
    saveCurrnetText = saveCurrnetText.map(eachChar => {
      let saveChar = { ...eachChar };
      if (!saveChar.text.isUpperCase) { saveChar.text = saveChar.text.toLowerCase(); } return saveChar;
    })
    props.setCurrnetText(saveCurrnetText);
  }
  function showButtons() {
    if (toShowButtuns == "true") {
      settoShowButtuns("false")
      return;
    }
    if (toShowButtuns == "false")
      settoShowButtuns("true")
  }
  function setAlign(side) {
    saveStackForUndo.push(currentAlign);
    setCurrentAlign(side);
  }
  return (
    <>
      <div className='keyboard'>
        <h2>OUR KEYBOARD</h2>
        {/* הצגת הטקסט למסך */}
        <div className="textcontainer" style={{ textAlign: currentAlign }}>{props.currnetText.map(theCurrentChar => {
          if (theCurrentChar.text == "↩️")
            return <br></br>
          else
            return <span style={{
              color: theCurrentChar.color,
              fontSize: theCurrentChar.size + "em",
            }}>{theCurrentChar.text}</span>
        })}</div>
        {/* הצגת סטייל נוכחי */}
        <div className='lookLike' style={{ color: currnetColor, fontSize: currnetSize + "em", textAlign: currentAlign }}>The Next Char Would Look Like This!</div>
        {/* הצגת המקלדת הבסיסית */}
        <div className='basicKeyboard' >
          {/* הצגת תוים למקלדת */}
          <LanguageLetters language={currnetLanguage} currnetText={props.currnetText} setCurrnetText={props.setCurrnetText} currnetColor={currnetColor} currnetSize={currnetSize} setccurrnetColor={setccurrnetColor} />
          <button onClick={deleteChar}>Delete</button>
          <button onClick={undo}>UNDO</button >
          <div className='alignButtons'>
            <button onClick={() => setAlign("left")}>left</button >
            <button onClick={() => setAlign("center")}>center</button >
            <button onClick={() => setAlign("right")}>rigth</button ></div>
          <LanguageButtons setcurrnetLanguage={setcurrnetLanguage} language={language} /><br />
          {toShowButtuns == "false" && <button onClick={showButtons} className='forAll'>For All</button>}
          {toShowButtuns == "true" && <button onClick={showButtons} className='forEach'>For Each</button>}
        </div >

        {toShowButtuns == "true" && <div>
          <button className='allTaxt' onClick={upper}>Upper</button>
          <button className='allTaxt' onClick={lower}>Lower</button>
          <button className='allTaxt' onClick={deleteAll}>Clear</button>
          <ColorButtonsToAll currnetText={props.currnetText} setCurrnetText={props.setCurrnetText} toShowButtuns={toShowButtuns} />
          <SizeButtonsToAll currnetText={props.currnetText} setCurrnetText={props.setCurrnetText} toShowButtuns={toShowButtuns} />
        </div >}
        {toShowButtuns == "false" && <div >
          <ColorButtons setccurrnetColor={setccurrnetColor} currnetColor={currnetColor} />
          <SizeButtons setccurrnetSize={setcurrnetSize} currnetSize={currnetSize} />
        </div>}
      </div>
    </>)
}


export default Keyboard