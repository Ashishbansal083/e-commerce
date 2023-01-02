import React from 'react'
import css from './Hero.module.css'
import HeroImg from '../../assets/hero.png'
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion';


const Hero = () => {
    const transition={duration:3,type:'spring'}
  return (
    <div className={css.container}>


        {/* left side */}
        <div className={css.h_sides}>
            <span className={css.text1}>skin protection cream</span>
            <div className={css.text2}>
                <span>trendy collection</span>
                <span>seedilysay has suitable disposal and boy</span>
            </div>
        </div>

        {/* middle side hero image */}
        <div className={css.wrapper}>
            {/* bluecircle */}
            <motion.div 
            className={css.bluecircle}
            initial={{bottom:'2rem'}}
            whileInView={{bottom:'0rem'}}
            transition={transition}
            ></motion.div>

            {/* hero img */}
            <motion.img 
            initial={{bottom:'-2rem'}}
            whileInView={{bottom:'0rem'}}
            transition={transition}
            src={HeroImg} 
            width={600} alt=""/>
            <motion.div 
            initial={{right:'4%'}}
            whileInView={{right:'2%'}}
            transition={transition}
            className={css.cart2}>
                <RiShoppingBagFill/>
                <div className={css.signup}>
                    <span>Best signup offers</span>
                    <div>
                        <BsArrowRight/>
                    </div>
                </div>
            </motion.div>
        </div>
        {/* right side */}
        <div className={css.h_sides}>
         <div className={css.traffic}>
            <span>1.5m</span>
            <span>Monthly traffic</span>
         </div>
         <div className={css.customers}>
            <span>100k</span>
            <span>Happy customers</span>
         </div>
        </div>
    </div>
  )
}

export default Hero