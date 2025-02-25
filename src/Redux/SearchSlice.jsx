import { createSlice } from "@reduxjs/toolkit";

const setSearchLocalStorage = ()=>{
    try{
        const searchFromLocal = localStorage.getItem('Search');
        return searchFromLocal ? JSON.parse(searchFromLocal) : null;
    }
    catch(err){
        console.error("Error in loading search",err);
        return null;
    }
}

const SearchSlice = createSlice({
    name: 'Search',
    initialState: {
        Search: setSearchLocalStorage()
    },
    reducers:{
        setSearchState: (state, action)=>{
            console.log("Action payload",action.payload)
           state.Search = action.payload;
           localStorage.setItem('Search',JSON.stringify(state.Search));
        }
    }
})

export const {setSearchState} = SearchSlice.actions;
export default SearchSlice.reducer;