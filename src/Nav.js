import React, { useEffect, useState } from 'react'
import './Nav.css'
import avatar from './assets/img/avatar.jpg'

function Nav() {
    const [show,handleShow] = useState(false)

    const transitionNavBar = () => {
        if(window.scrollY > 100 ) {
            handleShow(true)
        }else{
            handleShow(false)
        }
    }
    
    useEffect(()=>{
        window.addEventListener('scroll',transitionNavBar)
        return () => window.removeEventListener('scroll',transitionNavBar)
    },[])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contetns'>
                <img className='nav__logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='' />
                <img className='nav__avatar' src={avatar} alt='' />
            </div>
        </div>
    )
}

export default Nav