import styled from "styled-components";
import { useAppDispatch } from "../../hooks";
import { Form, Field } from 'react-final-form';
import {addUserName} from '../../store';
import {Button, Input} from './../../ui'


const AskingNameModalWindow = () =>{
    const dispatch = useAppDispatch();
    interface userNameInputValues{
        login:string;
        password: string;
    }

    const onSubmit = (values:userNameInputValues) => {
        if(!values.login?.trim()) return 
        dispatch(addUserName(values.login))
    }

    return(
        <WindowOverlay>
        <PopUpWrapper>
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, values}) => (
                    <form 
                        onSubmit={handleSubmit}
                    >  
                        <Wrapper>
                            <Label>Login</Label>
                            <Field
                                name='login'
                                component={Input}
                            />
                            <Label>Password</Label>
                            <Field
                                name='password'
                                component={Input}
                            />   
                            <Button text='submit'/>
                            
                        </Wrapper>
                    </form>
                )
            }
            />
            
          </PopUpWrapper>
          <BlackLayer/>
        </WindowOverlay>
    )
}

const UserNameSpan = styled.span`
    font-weight: bold;
`
const WindowOverlay = styled.div`
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: fixed;
    top:0;
    margin-top: 5%;
    overflow: scroll;
    z-index: 11;
    width: 100%;
    height: 100%;
    left:0;
`
const PopUpWrapper = styled.div`
    padding-bottom: 100px;
    z-index: 14;
    position: relative; 
    background-color: white;
    border-radius: 5px;
    width: 600px;
    min-heigth: 400px;
`
const BlackLayer = styled.div`
    background-color: #505765;
    opacity: 1;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index 10;
`
const Footnote = styled.p`
    font-size: 17px;
    text-transform: uppercase;
    padding-top: 20px;
`

const Label = styled.label`
    font-size: 16px;
    padding-bottom: 10px;
`

const Wrapper = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    
`
export default AskingNameModalWindow;
