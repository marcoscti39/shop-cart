import React from 'react'

import {BsFillBagFill} from 'react-icons/bs'

import { useGlobalContext } from '../context'

import './../styles/header.css'

export default function Header() {
    const {amount} = useGlobalContext()
    return (
        <header>
            <div className="header-container">
                <strong className="header-name" >Use Reducer</strong>

                <div className="header-icon">

                    <BsFillBagFill/>

                    <div className="cart-items-counter">
                        {amount}
                    </div>

                </div>
            </div>
            
        </header>
    )
}
