import styled from "styled-components";
import {
    useAppSelector,
    userEmailSelector,
    userNameSelector,
}   from '../../';


interface Props{

}


function UserInfoBlock(props:Props){
    const userName = useAppSelector(userNameSelector);
    const userEmail = useAppSelector(userEmailSelector);
    return(
        <UserDataExternalWrapper>
            <UserDataElementWrapper>
                <UserDataCommonText>login:</UserDataCommonText>
                <UserData>{userName}</UserData>
            </UserDataElementWrapper>
            <UserDataElementWrapper>
                <UserDataCommonText>email:</UserDataCommonText>
                <UserData>{userEmail}</UserData>
            </UserDataElementWrapper>
            <UserDataElementWrapper>
                <UserDataCommonText>password:</UserDataCommonText>
                <UserData>0001w</UserData>
            </UserDataElementWrapper>
        </UserDataExternalWrapper>
    )
}


const UserDataExternalWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const UserDataElementWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    :last-child(){
        margin-bottom: 0px;
    }
`

const UserDataCommonText = styled.div`
    margin-right: 10px;
    font-size: 21px;
`

const UserData = styled.div`
    font-size: 21px;
    opacity: 0.7;
`


export default UserInfoBlock;