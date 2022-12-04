import styled from "styled-components";
import {
    LoginForm
}   from '../../';


interface Props{

}

function LoginPage(props:Props){
    return(
        <ExternalWrapper>
            <LoginForm/>
        </ExternalWrapper>
    )
}

const ExternalWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
`



export default LoginPage;