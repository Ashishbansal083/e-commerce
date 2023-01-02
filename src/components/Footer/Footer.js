import React from 'react'
import css from './Footer.module.css'
import logo from '../../assets/logo.png'
// import {
//     InboxIcon,
//     PhoneIcon,
//     LocationMarkerIcon,
//     LoginIcon,
//     UsersIcon,
//     LinkIcon,
//     MappinIcon,
//     AcademicCapIcon
    
    

// } from 'heroicons-react/24/outline' ;
import {HiOutlineLocationMarker,HiUser,HiOutlineLogin,HiOutlinePhone,HiInbox} from 'react-icons/hi';


const Footer = () => {
  return (
    <div className={css.cfooterwrapper}>
        <hr/>
        <div className={css.cfooter}>
            <div className={css.logo}>
            <img src={logo} alt=""/>
            <span>amazon</span>
            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Contact us</span>
                <span className={css.pngline}>
                  <HiOutlineLocationMarker className={css.icon}/> 
                  <span>11 north anue orlando,FL 32801</span>
                </span>
                <span className={css.pngline}>
                  <HiOutlinePhone className={css.icon}/> 
                  <span>352-306-4415</span>
                </span>
                <span className={css.pngline}>
                  <HiInbox className={css.icon}/> 
                  <span>support</span>
                </span>

              </div>

            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Account</span>
                <span className={css.pngline}>
                  <HiOutlineLogin className={css.icon}/> 
                  <span>Sign in</span>
                </span>
                
              </div>

            </div>
            <div className={css.block}>
              <div className={css.detail}>
                <span>Company</span>
                <span className={css.pngline}>
                  <HiUser className={css.icon}/> 
                  <span>About us</span>
                </span>
                
              </div>

            </div>
        </div>

    </div>
  )
}

export default Footer