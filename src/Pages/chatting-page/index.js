import React, { useState, createRef } from 'react'
import './index.scss'
import MsgBox from '../../Components/Msg-Box'
import Header from '../../Components/Header'
import CustomInputBox from '../../Components/CustomInputField'
import usersChattingData from '../../Data/usersChattingData.json'

const ChattingPage = () => {
  const [msgData, setMsgData] = useState(usersChattingData)
  //storing msg's

  const MsgdataHanlder = (data) => {
    setMsgData((state) => {
      scrollBottom()
      return [...state, data]
    })
    //fetching the new msgData to the msg data
  }
  const msgBody = createRef()
  const scrollBottom = () => {
    msgBody.current?.scrollIntoView({ behaviour: 'smooth' })
  }

  return (
    <React.Fragment>
      <Header />
      <div className="msg-body">
        {msgData &&
          msgData.map((item, index) => {
            return <MsgBox {...item} key={index} />
          })}
        <div className="scroll--margin" ref={msgBody}></div>
      </div>
      <div className="custom-inputbox">
        <CustomInputBox MsgdataHanlder={MsgdataHanlder} />
      </div>
    </React.Fragment>
  )
}

export default ChattingPage
