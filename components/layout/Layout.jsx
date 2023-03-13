import React, { useState } from 'react'
import Side from '../Sidebar'
import Navbar from '../Navbar'

const Layout = ({children}) => {
  const [show, setShow] = useState(false)
  return (
    <div className='app'>
        <Side show={show} />
        <div className='content'>
          <Navbar setShow={setShow} show={show} />
          <main>
              <div className='container'>
                  {children}
              </div>
          </main>
        </div>
    </div>
  )
}

export default Layout