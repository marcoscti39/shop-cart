import React,{useState, useEffect, useContext} from 'react'

import reduce from './reduce'

const GlobalContext = React.createContext()

export const useGlobalContext = () =>{
    return useContext(GlobalContext)
}

const initialValues = {
    cart: [],
    amount: 0,
    total: 0
}


export default function GlobalContextProvider({children}) {
    const [state, dispatch] = React.useReducer(reduce, initialValues)

    
    const removeItem = (id) =>{
        dispatch({type: "REMOVE_ITEM", payload: id} )
    }
    const increaseAmount = (id) =>{
        dispatch({type: "INCREASE_AMOUNT", payload: id})
    }
    const decreaseAmount = (id) =>{
        dispatch({type: "DECREASE_AMOUNT", payload: id})
    }

    const clearItems = () =>{
        dispatch({type: "CLEAR_CART"})
    }

    useEffect(() =>{
        dispatch({type: 'GET_TOTAL'})
        dispatch({type: 'GET_AMOUNT'})
    }, [state.cart])


    useEffect(() =>{
        const fetchData = async () =>{
            const response = await fetch('https://course-api.com/react-useReducer-cart-project')
            const data = await response.json()
            dispatch({type: 'ADD_ITEMS', payload: data})
        }
        fetchData()
    },[])

    

    return (
        <>
            <GlobalContext.Provider 
            value={{
                ...state,
                clearItems,
                removeItem,
                increaseAmount,
                decreaseAmount
                }}>

                {children}
            </GlobalContext.Provider>
            
        </>
    )
}
