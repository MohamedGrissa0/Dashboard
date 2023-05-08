import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:localStorage.getItem("Favorite")?JSON.parse(localStorage.getItem("Favorite")):[],
  
    
}


const cartSystem = createSlice({
    name:"favorite",
    initialState,
    reducers:{
        AddToCart:(state,action)=>{
           const find =state.carts.findIndex(item=>item._id===action.payload._id)
           if(find>=0){
            
           }else{
            const tempvar={...action.payload}
            state.carts.push(tempvar)
         
           }

           
        },
        RemoveFromCart:(state,action)=>{
            const filteredItems = state.carts.filter(item => item._id !== action.payload._id);
            // Return a new state object with the modified array
          
            return {
              ...state,
              carts: filteredItems,
             
            };
          

        }

    }
})


export const {AddToCart,RemoveFromCart}=cartSystem.actions;
export default cartSystem.reducer;