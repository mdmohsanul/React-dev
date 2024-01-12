import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    //name of the slice
    name:'cart',
    //give initial state
    initialState:{
        items:[]
    },
    //addItems is the dispatch action and fn is the reducer function
    reducers:{
        addItem:(state,action) =>{
               state.items.push(action.payload)
        },
        removeItem:(state,action) => {
            state.items.pop();
        },
        clearCart : (state,action) => {
            //RTK - either Mutate the existing state or return a new state
            state.items.length =0

           // return {items:[]}; //this new[] will be replaced inside originalstate=[]
        }
    }
})

//
export const {addItem,removeItem,clearCart} = cartSlice.actions

//export the slice
export default cartSlice.reducer