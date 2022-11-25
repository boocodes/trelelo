import { useState } from "react";
import styled from "styled-components";



import {
    CardModalWindow,
    useAppDispatch,
    userNameSelector,
    useAppSelector,
    TrelelloCardField,
    CustomLink,
}   from '../../../';


const TrelelloApp = () =>{
    
    let [cardModalWindowFlag, setCardModalWindowFlag] = useState(false);
    let [deleteCardFlag, setDeleteCardFlag] = useState(false);
    let [cardModalWindowTitle, setCardModalWindowTitle] = useState('');
    let [cardId, setCardId] = useState('');
    let [modalWindowRowName, setModalWindowRowName] = useState('');
    const userName = useAppSelector(userNameSelector);

    function getClickedCardTitleAndSetModalFlagTitle(title:string, flag:boolean, columnTitle:string, cardId:string){
       setCardModalWindowTitle(title);
       setCardId(cardId);
       setCardModalWindowFlag(flag);
       setModalWindowRowName(columnTitle);

    }
    function activateDeleteCardButton(value:boolean){
        setDeleteCardFlag(value);
        setCardModalWindowFlag(false);
    }
    
    return(
        <Wrapper>
            {cardModalWindowFlag === false ? null
            :
            <CardModalWindow
                modalWindowRowName={modalWindowRowName}
                getEditedCardTitle={setCardModalWindowTitle}
                cardId = {cardId}
                activateDeleteCardButton={activateDeleteCardButton}
                hideCardModalWindow={setCardModalWindowFlag}
                modalWindowTitle={cardModalWindowTitle}
            />
            }
            <MainHeader> 
                <MainHeaderLogoText>
                    <CustomLink text="Trelello" link={"/app"} bgColor={"none"}/>
                </MainHeaderLogoText>
                <UserNameInMainHeader>
                    <CustomLink text={userName} link={"/personal"} bgColor={"#0a5480"}/>
                </UserNameInMainHeader>
            </MainHeader>
            <MainBody>
                <TrelelloCardField
                setCardModalWindowTitleFunction={setCardModalWindowTitle}
                changeActivateDeleteButtonFlag={activateDeleteCardButton}
                activateDeleteCardButtonFlag={deleteCardFlag}
                getClickedCardTitle={getClickedCardTitleAndSetModalFlagTitle}
                />
            </MainBody>
        </Wrapper>
    )
}

const MainHeader = styled.div`
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
const MainBody = styled.div`
    padding-top: 20px;
`
const Wrapper = styled.div`  
`    

export default TrelelloApp;