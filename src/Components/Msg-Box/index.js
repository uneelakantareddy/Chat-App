import React, { useState } from 'react'
import './index.scss'

const MsgBox = (props) => {
  const { userImg, userName, msgTime, userMsg } = props
  const [noOfLikes, setNoOfLikes] = useState(0)
  // state for counting the number of likes

  return (
    <div className="msg">
      <div>
        <img
          className="msg__userprofile--img"
          src={userImg}
          width="50px"
          height="50px"
          alt=""
        />
      </div>
      <div className="msg__userdetails">
        <div className="msg__userdetails-addInfo">
          <span className="msg__userdetails-addInfo--name">{userName}</span>
          <span className="msg__userdetails-addInfo--time">{msgTime}</span>
        </div>
        <div className="msg__content msg__userdetails-addInfo">{userMsg}</div>
        <span
          className="msg--like-btn"
          onClick={() => setNoOfLikes((count) => count + 1)}
        >
          &#128077;
        </span>
        <span>{noOfLikes !== 0 && noOfLikes}</span>
      </div>
    </div>
  )
}

export default MsgBox
