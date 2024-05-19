import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  id: '',
  avatar: '',
  name: '',
 email: ''
};

const storeAuth = createSlice({
  name: 'storeAuthUser',
  initialState,
  reducers: {
    setAuth(state, action){
        state.auth = action.payload;
    },  
  },
});

export const { setAuth } = storeAuth.actions;
export default storeAuth.reducer;