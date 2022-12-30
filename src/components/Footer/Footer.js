import React from 'react'
import css from './Footer.module.css'
import logo from '../../assets/logo.png'
import {
    InboxIcon,
    PhoneIcon,
    LocationMarkerIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon,

} from '@heroicons/react/outline' ;

const Footer = () => {
  return (
    <div className={css.cfooterwrapper}>
        <hr/>
        <div className={css.cfooter}>
            <div className={css.logo}>
            <img src={logo} alt=""/>
            <span>amazon</span>
            </div>
        </div>

    </div>
  )
}

export default Footer