import { configureStore, createSlice } from '@reduxjs/toolkit'
import ShoesData from "./pages/ShoesData";
import ClothesData from "./pages/ClothesData";

let shoes=createSlice({
    name:'shoes',
    initialState: ShoesData,
})

let clothes=createSlice({
    name:'clothes',
    initialState: ClothesData,
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        { id: 21, name: 'White and Black', price:145000, count: 2 },
    ],
    reducers: {
        addCount(state, action) {
            let num = state.findIndex((a) => { return a.id === action.payload })
            if (state[num].count<5) state[num].count++
        },
        subtractCount(state, action) {
            let num = state.findIndex((a) => { return a.id === action.payload })
            if (state[num].count>1) state[num].count--
        },
        addItem(state, action) {
            let num = state.findIndex((a) => { return a.id === action.payload.id })
            if(num===-1) state.push(action.payload)
            else{
                if (state[num].count<5) state[num].count++
            }
        },
        deleteItem(state, action) {
            state.splice(action.payload.i, 1)
        },
    }
})

export let { addCount, subtractCount, addItem, deleteItem } = cart.actions

export default configureStore({
    reducer: {
        shoes: shoes.reducer,
        clothes: clothes.reducer,
        cart: cart.reducer
    }
}) 