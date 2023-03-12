import React from 'react'
import { FaCoins, FaUserFriends, FaUsers } from 'react-icons/fa'
import {BsCashCoin} from 'react-icons/bs'
const Stats = () => {
    const data = [
        {
            name: 'users',
            number: '2,345',
            color: 'violet',
            svg: <FaUsers />
        },
        {
            name: 'active users',
            number: '2,345',
            color: 'purple',
            svg: <FaUserFriends />
        },
        {
            name: 'users with loans',
            number: '12,345',
            color: 'orange',
            svg: <BsCashCoin />
        },
        {
            name: 'users with savings',
            number: '104, 345',
            color: 'red',
            svg: <FaCoins />
        },
    ]
  return (
    <div className='stats'>
        <h4 className="headline">
            users
        </h4>
        <div className="stats-container">
           {
            data.map((item, index) => (
                <div className="stats-item" key={index}>
                    <div className={`stats-item-icon ${item.color}`}>
                        {item.svg}
                    </div>
                    <div className="stats-item-name">
                        {item.name}
                    </div>
                    <div className="stats-item-number">
                        {item.number}
                    </div>
                </div>
            ))
           }
        </div>
    </div>
  )
}

export default Stats