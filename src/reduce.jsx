import React from 'react'

export default function reduce(state, action) {
    if(action.type === "ADD_ITEMS"){
        return {...state, cart: action.payload}
    }

    if(action.type === "REMOVE_ITEM"){
        const newCart = state.cart.filter(item => item.id !== action.payload)
        return {...state, cart: newCart}
    }

    if(action.type === "INCREASE_AMOUNT"){
        const newCart = state.cart.map(item =>{
            if(action.payload === item.id){
                return {...item, amount: item.amount + 1}
            }
            return item
        })
        return {...state, cart: newCart}
    }

    if(action.type === "DECREASE_AMOUNT"){
        const newCart = state.cart.map(item =>{
            if(action.payload === item.id){
                return {...item, amount: item.amount - 1}
            }
            return item
        }).filter(item => item.amount > 0)

        return {...state, cart: newCart}
    }

    if(action.type === "GET_TOTAL"){
        const totalPrice = state.cart.reduce((acc, item) => {
            acc += (parseFloat(item.price) * parseFloat(item.amount))
            return acc
        },0)
        return {...state, total: totalPrice.toFixed(2)}
    }
    if(action.type === "GET_AMOUNT"){
        const totalAmount = state.cart.reduce((acc, item) => acc + item.amount,0)
        return {...state, amount: totalAmount}

    }
    if(action.type === "CLEAR_ITEMS"){
        return {...state, cart: []}
    }
}
