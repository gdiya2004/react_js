import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store=configureStore({
    reducer:todoReducer
})

// redux is core and independent library
// react redux is its implementation
// redux tool kit=>se kaafi kaam auto ho jaate hain

// pehle store bnata hai
// configureStore->reducer

// phir reduce introduce krna padega
// features ko Slice bolta hai
// createSlice->{name:"",initialState:"",reducers:""}

// state=>updated state value milti hai in store
// action=>payload milta hai

// state ka access hota hai isliye sab kuch preserve rehta just new change state mein update krna padta
// saare reduces separarytely name se export krne padhenge

//useDispatch : values state ko bhejne ke lie...
//useSelector :select krne ke lie
