import styled from "styled-components";
import {
    useAppSelector,
    userEmailSelector,
    userNameSelector,
    authUser,
    useAppDispatch,
}   from '../../';


interface Props{

}


function UserInfoBlock(props:Props){
    const dispatch = useAppDispatch()
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
            <LogoutButton onClick={()=>dispatch(authUser({authFlag: false}))}>
                Logout
            </LogoutButton>
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


const LogoutButton = styled.button`
    
`


export default UserInfoBlock;