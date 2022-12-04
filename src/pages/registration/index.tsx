import styled from "styled-components";
import React from "react";
import {    
    RegistrationForm,
} from '../../';


interface Props{

}

function RegistrationPage(props:Props) {
    return(
        <ExternalWrapper>
            <RegistrationForm/>
        </ExternalWrapper>
    )
}



const ExternalWrapper = styled.div`

`


export default RegistrationPage;