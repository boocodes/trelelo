import React, { Ref, RefObject } from 'react';
import styled from 'styled-components';
import {useState, useRef, RefAttributes} from 'react';
import {RootState, useAppSelector} from '../../';

interface Props{
    ref: any;
    labelText?: string;
    placeholder: string;
    type?: string;
    error?: string;
    value?: string;
    onChange: any;
    pattern?: any;
    format?: any;
    separator?: any;
}



const RootInput = React.forwardRef<HTMLInputElement, Props>((props: Props, ref) => (
    <>
        {props.labelText !== undefined ? <RootLabel>{props.labelText}</RootLabel> : null}
        <Root type={'password'} {...props} ref={ref}/>    
    </>
)); 


function PasswordInput(props:Props){
    const [passwordVisibilityFlag, setPasswordVisibilityFlag] = useState(false);
        return(
            <>
                {passwordVisibilityFlag === true ? <RootInput type='text' {...props}/> : <RootInput type='password' {...props}/>}
                <ChangePasswordVisibilityButton onClick={()=>{setPasswordVisibilityFlag(!passwordVisibilityFlag)}}>
                    <PasswordVisibilityIcon src={
                        passwordVisibilityFlag === true ? './images/showedPassword.png' : './images/hidenPassword.png'
                    }/>  
                </ChangePasswordVisibilityButton>
            </>
        )
}


const RootLabel = styled.label`
    padding-left: 10px;
`
interface RootProps{
    error?: string;
    bgColor?: string;
    borderStyle?: string;
}


const ChangePasswordVisibilityButton = styled.a`
    background: none;
    border: none;
    margin-top: 2px;
    width: 25px;
    cursor: pointer;
    position: relative;
    bottom: 80px;
    left: 260px;
    z-index: 4;
`
const PasswordVisibilityIcon = styled.img`
    width: 30px;
`

const Root = styled.input<RootProps>`
    z-index: 3;
    background: #F2F3F4;
    outline: none;
    border: ${props=> props.error === 'error' ? '1px solid red' : props.error === 'ok' ? '1px solid #17BC77' : '1px solid white'};
    padding: 14px 20px;
    ::placeholder{
        color: #717583;
        font-weight: 400;
        font-size: 14px;
    }
    border-radius: 10px;
    width: 280px;
    margin-top: 5px;
    margin-bottom: 40px;
    :last-child(){
        margin-bottom: 0px;
    }
`
export default PasswordInput;