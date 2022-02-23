import React from 'react'
import './Navbar.scss'

export const Navbar = () => {
  return (
    <div className='navbar'>
            <div className='navbar__left'>
                <div className='navbar__left-avatar'>
                
                </div>
                <div className='navbar__left-personData'>
                    <h3 className='navbar__left-personData-name'>Полюхович Назар</h3>
                    <p className='navbar__left-personData-status'>last seen recently</p>
                </div>
            </div>
            <div className='navbar__right'>
                <button className='navbar__right-call'>
                    <img src="assets/call.svg" alt="call" />
                </button>
                <button className='navbar__right-search'>
                    <img src="assets/search.svg" alt="search" />
                </button>
                <button className='navbar__right-more'>
                    <img src="assets/more.svg" alt="more" />
                </button>
            </div>
    </div>
  )
}
