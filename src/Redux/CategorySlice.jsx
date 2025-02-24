import { createSlice } from "@reduxjs/toolkit";

const CategoryStorage = ()=>{
    try{
        const storedCategory = localStorage.getItem('Category');
        return storedCategory ? JSON.parse(storedCategory) : 'All'
    }
    catch(err){
        console.error("Error in loading", err);
        return 'All'
    }

  return 
}

const CategorySlice = createSlice({
    name: 'Category',
    initialState: {
        category: CategoryStorage()
    },
    reducers:{
        addCategory: (state, action)=>{
            console.log(action.payload);
            state.category = action.payload;
            localStorage.setItem('Category',JSON.stringify(state.category))
        }
    }
})

export const {addCategory} = CategorySlice.actions;

export default CategorySlice.reducer;

