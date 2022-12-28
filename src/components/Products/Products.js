import React from 'react'
import { useState } from 'react'
import css from './Products.module.css'
import plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'

const Products = () => {
    const [menuproducts,setmenuproducts]=useState(ProductsData)
  return (
    <div className={css.container}>
        <img src={plane} alt='plane img'/>
        <h1>Our Feture Products</h1>
        <div className={css.Products}>
            <ul className={css.menu}>
                <li>All</li>
                <li>Skin care</li>
                <li>Conditioners</li>   
                <li>Foundations</li>
            </ul>
            <div className={css.list}>
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