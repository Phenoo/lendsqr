import React from 'react'

import { AiOutlineBell, AiOutlineSearch} from 'react-icons/ai'
 
import Img1 from '..//public/profile.png'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'


const Navbar = ({setShow, show}) => {
  return (
    <div className='nav-bar'>
      <div className="none" style={{marginLeft: `${show ? '60px' : '0'}`}} onClick={() => setShow(!show)}>
        <FaBars />
      </div>
        <div className='search-bar'>
            <input type='text' placeholder='Search for anything' />
            <button>
                <AiOutlineSearch />
            </button>
        </div>
        <div className='noti-bar'>
            <p>docs</p>
            <button>
                <AiOutlineBell />
            </button>
            <div className="profile">
              <Image src={Img1} height={40} width={40} alt='profile' />
              <h6>
                Ayodeji
              </h6>
            </div>
        </div>
    </div>
  )
}

export default Navbar