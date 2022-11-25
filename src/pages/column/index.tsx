import styled from "styled-components";
import {
    selectColumnById,
    useAppSelector,
    selectActiveColumnId,
    RootState,
    ColumnType,
}   from '../../';



interface Props{

}


function ColumnPage(props:Props){
    const activeColumnId:string = useAppSelector(selectActiveColumnId);
    const activeColumn:ColumnType = useAppSelector((state:RootState)=>selectColumnById(state, activeColumnId));
    return(
        <>
            <h1>
                {activeColumn.name}
            </h1>
        </>
    )
}

export default ColumnPage;