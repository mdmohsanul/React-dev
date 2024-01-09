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

        }
    }
})