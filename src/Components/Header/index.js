import React from 'react'
import '../Header/index.scss'
import userImg from '../../assets/images/userImg.png'

const Header = () => {
  const headerInfo = {
    title: 'Introductions',
    description: 'This channel for company wide chatter',
    noOfUsers: '5',
    totalUsers: '100',
  }

  return (
    <div className="header">
      <div className="header__leftSideContent">
        <h2 className="header__title">{headerInfo.title}</h2>
        <i className="header__description">{headerInfo.description}</i>
      </div>
      <div className="header__rightSideContent">
        {`${headerInfo.noOfUsers} | ${headerInfo.totalUsers}`}
        <span>
          <img src={userImg} width="30px" height="30px" alt="" />
        </span>
      </div>
    </div>
  )
}

export default Header
