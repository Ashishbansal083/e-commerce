import React from 'react'
import shade from '../../assets/shade.png'
import css from './Virtuals.module.css'
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'

const Virtuals = () => {
  return (
    <div className={css.Virtuals}>
        <div className={css.left}>
            <span>Virtuals try on</span>
            <span>Never by the wrong shade again !</span>
            <span>try now</span>
            <img src={shade} alt='shade'/>
        </div>
        <div className={css.right}>
            <div className={css.wrapper}>
            <ReactCompareImage leftImage={Before}
            rightImage={After}/>
            </div>            
        </div>
    </div>
  )
}

export default Virtuals