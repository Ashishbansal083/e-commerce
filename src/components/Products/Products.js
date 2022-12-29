import React from 'react'
import { useState } from 'react'
import css from './Products.module.css'
import plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import {useAutoAnimate} from '@formkit/auto-animate/react'

const Products = () => {
    const [parent]=useAutoAnimate()
    const [menuproducts,setmenuproducts]=useState(ProductsData)

    const filter=(type)=>{
        setmenuproducts(ProductsData.filter((product)=>product.type===type))
    }
  return (
    <div className={css.container}>
        <img src={plane} alt='plane img'/>
        <h1>Our Feture Products</h1>
        <div className={css.Products}>
            <ul className={css.menu}>
                <li onClick={()=>setmenuproducts(ProductsData)}>All</li>
                <li onClick={()=>filter("skin care")}>Skin care</li>
                <li onClick={()=>filter("conditioner")}>Conditioners</li>   
                <li onClick={()=>filter("foundation")}>Foundations</li>
            </ul>
            <div className={css.list} ref={parent}>
                {menuproducts.map((product,i)=>
                (<div className={css.products}>
                    <div className='left-s'>
                        <div className='name'>
                          <span>{product.name}</span>
                          <span>{product.detail}</span>
                        </div>
                        <span>{product.price}$</span>
                        <div>shop now</div>
                        <img src={product.img} alt='product' className='img-p'/>
                    </div>
                </div>)                  
                    )}
            </div>
        </div>
    </div>
  )
}

export default Products