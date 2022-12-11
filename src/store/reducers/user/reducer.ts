import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import {UserType} from '../../../types'

const initialState:UserType = {
    userName: "",
    authFlag: false,
    email: "",
    password: ""
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

interface ChangeUserData{
    userName: string;
    email: string;
    password: string;
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
        changeUserData: (state, {payload}:PayloadAction<ChangeUserData>) =>{
            return {...state, ...payload};
        },
    }
})



export const {addUserName, authUser, changeUserEmail, changeUserData}  = userReducer.actions;
export default userReducer.reducer;