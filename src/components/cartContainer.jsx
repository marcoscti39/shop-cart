import React,{useEffect} from 'react'

import './../styles/cart.css'

import {useGlobalContext} from '../context'

import CartItem from './cartItem'


export default function Cart() {
    const {cart, clearItems, total} = useGlobalContext()
    
    if(cart.length <= 0){
        return <strong className='empty-cart' >is currently empty</strong>
    }

    return (
        <>
            <h1 className='cart-title' >your bag</h1>
            <main className="cart-main">

                {cart?.map(cartItem => {
                    return(
                        <React.Fragment key={cartItem.id}>
                            <CartItem {...cartItem}/>

                        </React.Fragment>
                    )
                })}



                <section className="cart-total">
                    <h2 className="cart-total-title" >total</h2>
                    <strong className="cart-total-price">
                        $ {total}
                    </strong>

                </section>
                
                <button onClick={()=> clearItems()} className='cart-clear-btn'>clear cart</button>
            </main>
            
        </>
    )
}
