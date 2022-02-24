import React from 'react'
import './FormMessage.scss'

export const FormMessage = () => {
  return (
    <div className='formMessage'>
      <form action="" className='formMessage__form'>
        <div className='formMessage__form-div'>
          <div className='formMessage__form-div-clip'>
            <button>
              <img src="/assets/clip.svg" alt="clip" />
            </button>
          </div>
          <div className='formMessage__form-div-input'>
            <input type="text" placeholder='Write a message...' />
          </div>
        </div>
        <div className="formMessage__form-div">
          <div className='formMessage__form-div-smile'>
            <img src="/assets/smile.svg" alt="" />
          </div>
          <div className='formMessage__form-div-plane'>
            <button>
              <img src="/assets/plane.svg" alt="" />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
