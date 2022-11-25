import {
    RootState, 
    ColumnType,
}   from '../../../';
export const columnsSelector = (state:RootState) => state.column.columns;
export const selectColumnById = (state:RootState, id: string) => {
    return state.column.columns.find((column:ColumnType) => column.id === id);
}
export const selectActiveColumnId = (state:RootState) => {
    return state.column.activeColumnId;
}