import { RootState } from "../../store";
export const userNameSelector = (state:RootState) => state.user.userName;
export const userAuthFlagSelector = (state:RootState) => state.user.authFlag;