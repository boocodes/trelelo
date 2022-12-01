import styled from "styled-components";
import React from "react";
import {
    CustomLink
}   from '../../';


interface Props{

}

function WelcomePage(props:Props) {
    return(
        <ExternalWrapper>
            <TitleWrapper>
                <TitleText>Welcome</TitleText>
            </TitleWrapper>
            <LinksWrapper>
                <CustomLink text="sign in" link="/login" bgColor="none" textColor="black"/>
                <CustomLink text="sign up" link="/registration" bgColor="none" textColor="black"/>
            </LinksWrapper>
        </ExternalWrapper>
    )
}



const ExternalWrapper = styled.div`
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const TitleWrapper = styled.div`
    margin-bottom: 20px;
`

const TitleText = styled.p`
    font-size: 24px;
`

const LinksWrapper = styled.div`

`


export default WelcomePage;