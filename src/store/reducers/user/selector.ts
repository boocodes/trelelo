import { RootState } from "../../store";
export const userNameSelector = (state:RootState) => state.user.userName;
export const userAuthFlagSelector = (state:RootState) => state.user.authFlag;
export const userEmailSelector = (state:RootState) => state.user.email;
export const userDataSelector = (state:RootState) => state.user;