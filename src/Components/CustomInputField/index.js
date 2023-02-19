import React, { useState, useRef } from 'react'

//importing styling file
import './index.scss'

//importing lib for emoji's
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

// importing images
import SentImage from '../../assets/images/sentImage.png'
import emojiSentBtn from '../../assets/images/emojiSentBtn.avif'

//improting users data json file
import usersListInfo from '../../Data/usersListInfo.json'

const CustomInputField = ({ MsgdataHanlder }) => {
  const [showPicker, setShowPicker] = useState(false)
  //shows emoji picker when it is true
  const [value, setValue] = useState('')
  //store input msg
  const [showSuggestions, setShowSuggestions] = useState(false)
  //Shows list of users when '@' is pressed
  const inputRef = useRef(null)
  //focus to inputField

  let time = new Date()
  const msgDateTime = time.getHours() + ':' + time.getMinutes()
  const randomNumber = Math.floor(Math.random() * usersListInfo.length)

  const handleEnter = (message) => {
    if (message.length === 0) {
      return null
    }
    const tempData = {
      userName: usersListInfo[randomNumber].userName,
      userImg: usersListInfo[randomNumber].userImg,
      userId: usersListInfo[randomNumber].userId,
      userMsg: value,
      msgTime: msgDateTime,
    }
    MsgdataHanlder(tempData)
  }

  const onEnter = (val) => {
    //sends msg to the parent component
    const msg = value
    handleEnter(msg)
    setValue((state, props) => '')
  }

  const emojiSelecting = (e) => {
    //emoji parser and update the input msg with emoji
    setShowPicker(false)
    let listOfSymbols = []
    let symbols = e.unified.split('-')
    symbols.map((ele) => listOfSymbols.push('0x' + ele))
    let emoji = String.fromCodePoint(...listOfSymbols)
    inputRef.current.focus()
    setValue((previous) => {
      return previous + emoji
    })
    console.log(listOfSymbols, 'emoji')
  }

  const handleInputChange = (e) => {
    if (e.slice(-1) === '@') {
      setShowSuggestions(true)
    }
  }

  return (
    <React.Fragment>
      <div className="custom-input__suggestion">
        {showSuggestions &&
          usersListInfo.map((item) => {
            return (
              <div
                className="custom-input__suggestion--item"
                key={item.userId}
                onClick={() => {
                  setValue((previous) => previous + item.userName + '')
                  setShowSuggestions(false)
                  inputRef.current.focus()
                }}
              >
                {item.userName}
              </div>
            )
          })}
      </div>
      <div className="custom-input">
        <input
          type="text"
          className="custom-input__input--field"
          placeholder="Type Message"
          value={value}
          ref={inputRef}
          onChange={(e) => {
            setValue(e.target.value)
            handleInputChange(e.target.value)
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              if (value.length === 0) return null
              onEnter(value)
            }
          }}
        />
        <span className="custom-sendicons">
          <span
            onClick={(e) => {
              onEnter(value)
            }}
          >
            <img src={SentImage} width="30px" height="30px" alt="" />
          </span>
          <span
            onClick={() => {
              setShowPicker((previous) => !previous)
            }}
          >
            <img src={emojiSentBtn} width="30px" height="30px" alt="" />
          </span>
          {showPicker && (
            <span>
              <Picker data={data} onEmojiSelect={(e) => emojiSelecting(e)} />
            </span>
          )}
        </span>
      </div>
    </React.Fragment>
  )
}

export default CustomInputField
