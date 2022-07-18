import React,{useState, useEffect} from 'react'
import { useGlobalContext } from '../context'
import {IoChevronUpOutline} from 'react-icons/io5'
import {TbChevronDown} from 'react-icons/tb'

export default function CartItem({amount, id, price, title, img}) {
    const {removeItem, increaseAmount, decreaseAmount} = useGlobalContext()

    
    return (
        <section key={id} className="cart-item" >
                <img className="item-img" 
                src={img} 
                    />

                <div className="item-info-wrapper">
                    <h2 className='item-name' >{title}</h2>
                    <span className="item-price" >${price}</span>
                    <button onClick={() => removeItem(id)} className='item-remove-btn' >remove</button>
                </div>
                
                <div className="item-amount-control">
                    <button onClick={() => increaseAmount(id)} className="item-increase-btn">
                            <IoChevronUpOutline/>
                    </button>
                    <span className="item-amount" >{amount}</span>
                    <button onClick={() => decreaseAmount(id)} className="item-decrease-btn">
                        <TbChevronDown/>
                    </button>
                </div>

        </section>
           

            
        
    )
}
