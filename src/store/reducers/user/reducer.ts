import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import {UserType} from '../../../types'

const initialState:UserType = {
    userName: 'nick',
    authFlag: false,
    email: "java.2015@bk.ru",
}


interface AuthUserInterface{
    authFlag: boolean;
}

interface LoginUser{
    userName: string;
}

interface ChangeUserEmailInterface{
    email: string;
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
        changeUserEmail: (state, {payload}:PayloadAction<ChangeUserEmailInterface>) =>{
            return {...state, ...payload};
        },
    }
})



export const {addUserName, authUser, changeUserEmail}  = userReducer.actions;
export default userReducer.reducer;