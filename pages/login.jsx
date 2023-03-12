import React from 'react'
import Image from 'next/image'

import Img1 from '../public/pablo-sign-in 1.png'

import Logo from '../components/Logo'

const LoginPage = () => {
  return (
    <div>
        <section>
          <Logo />
          <div className='grid'>
            <div>
              <div>
                <Image src={Img1} alt='sign-in' width={500} height={330}/>
              </div>
            </div>
            <div className='form-container'>
              <h4 className='headline'>
                Welcome!
              </h4>
              <p>Enter details to login.</p>
              <form>
                <div className='form-group'>
                  <input type='text' className='form-control' placeholder='name' />
                </div>
                <div className='form-group'>
                  <input type='password' className='form-control' placeholder='password' />
                </div>

                <span>
                  <a className='forgot'>forgot password</a>
                </span>

                <button type='submit' className='btn '>
                  log in
                </button>
              </form>
            </div>
          </div>
        </section>
    </div>
  )
}

export default LoginPage