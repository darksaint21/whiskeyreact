import {createSlice} from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name:'root',
    initialState:{
        name:'Name',
        brand:'Brand',
        size:'Size',
       proof:'Proof',
        price: 'Price',

    },
    reducers:{
        // action is submitted esle where - writen to state.name
        chooseName: (state, action) => {state.name=action.payload}, //all we are doing is setting input to the state.name
        chooseBrand:(state, action ) => {state.brand=action.payload},
        chooseSize:(state, action) => {state.size=action.payload},
        chooseProof:(state, action) => {state.proof=action.payload},
        choosePrice:(state, action) =>{state.price=action.payload}
    }
})

export const reducer = rootSlice.reducer;
export const {chooseName, chooseBrand, chooseSize, chooseProof, choosePrice}= rootSlice.actions