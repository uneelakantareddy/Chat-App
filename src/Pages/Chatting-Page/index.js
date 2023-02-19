import React, { useState } from 'react'
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
      return [...state, data]
    })
    //fetching the new msgData to the msg data
  }

  return (
    <React.Fragment>
      <div>
        <Header />
        {msgData &&
          msgData.map((item, index) => {
            return <MsgBox {...item} key={index} />
          })}
        <div className="custom-inputbox">
          <CustomInputBox MsgdataHanlder={MsgdataHanlder} />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ChattingPage
