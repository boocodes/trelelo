import styled from "styled-components";
import {
    CustomLink,
    userNameSelector,
    useAppSelector,
}   from "../../";



function Header(){
    const userName = useAppSelector(userNameSelector);
    return(
        <ExternalWrapper>
            <MainHeaderLogoText>
                <CustomLink text="Trelello" link={"/app"} bgColor={"none"}/>
            </MainHeaderLogoText>
            <UserNameInMainHeader>
                <CustomLink text={userName} link={"/personal"} bgColor={"#0a5480"}/>
            </UserNameInMainHeader>     
        </ExternalWrapper>
    )

}

const ExternalWrapper = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #004269;
`
const MainHeaderLogoText = styled.h1`
    color: white;
    font-size: 25px;
    text-transform: uppercase;
`
const UserNameInMainHeader = styled.p`
    color: white;
    text-transform: uppercase;
    font-size: 14px;
`

export default Header;