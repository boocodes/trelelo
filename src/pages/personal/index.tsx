import styled from "styled-components";
import React from "react";
import {
    Header,
    UserInfoBlock,
}   from '../../';


interface Props{

}

function PersonalPage(props:Props) {
    return(
        <ExternalWrapper>
            <Header/>
            <InnerWrapper>
                <UserInfoBlock/>
            </InnerWrapper>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`

`
const InnerWrapper = styled.div`
    display: flex;
    margin-left: 40px;
    margin-top: 40px;
    flex-direction: column;

`


export default PersonalPage;