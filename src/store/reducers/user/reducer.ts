import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import {UserType} from '../../../types'

const initialState:UserType = {
    userName: '',
    authFlag: false,
}


interface AuthUserInterface{
    authFlag: boolean;
}

interface LoginUser{
    userName: string;
}

export const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers:{
        addUserName: (state, action: PayloadAction<string>) =>{
            state.userName = action.payload;
        },
        authUser: (state, {payload}:PayloadAction<AuthUserInterface>) =>{
            return {...state, ...payload};
        },
    }
})



export const {addUserName, authUser}  = userReducer.actions;
export default userReducer.reducer;