import React from 'react'
import Side from '../Sidebar'
import Navbar from '../Navbar'

const Layout = ({children}) => {
  return (
    <div className='app'>
        <Side />
        <div className='content'>
          <Navbar />
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