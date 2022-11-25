import { createSlice , PayloadAction} from "@reduxjs/toolkit";
import { ColumnType } from "../../../types";

interface Columns{
    columns: ColumnType[],
    activeColumnId: string;
}

const initialState:Columns = {
    columns : [
        {id: Math.random().toString(), name : 'ToDo'},
        {id: Math.random().toString(), name : 'In Progress'},
        {id: Math.random().toString(), name : 'Testing'}, 
        {id: Math.random().toString(), name : 'Done'},
    ],
    activeColumnId: "",
}

interface ChangeColumnType{
    columnId: string;
    name: string;
}
interface ChangeActiveColumnIdType{
    activeColumnId: string;
}

export const columnReducer = createSlice({
    name: 'column',
    initialState,
    reducers: {
        addNewColumn: (state, action: PayloadAction<string>) =>{
            state.columns.push({id: Math.random().toString(), name: action.payload});
        },
        deleteCurrentColumn: (state, action: PayloadAction<string>) =>{
           state.columns = state.columns.filter((column:ColumnType) => column.name !== action.payload)
        },
        changeColumn: (state, {payload}: PayloadAction<ChangeColumnType>) =>{
           state.columns = state.columns.map((column:ColumnType) => column.id === payload.columnId ? {...column, ...payload} : column);
        },
        changeActiveColumnId: (state, {payload}:PayloadAction<ChangeActiveColumnIdType>) =>{
            return {...state, ...payload};
        },
    }
})

export const {addNewColumn, changeColumn, deleteCurrentColumn, changeActiveColumnId}  = columnReducer.actions;
export default columnReducer.reducer;