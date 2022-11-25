import TrelelloApp from './components/TrelelloWorkingWindow/TrelelloApp/TrelelloApp';
import AskingNameModalWindow from './components/AskingNameModalWindow/AskingNameModalWindow';
import './Styles/App.css'
import { useAppSelector } from './hooks';
import styled from 'styled-components';
import { userNameSelector, userAuthFlagSelector} from './store';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';


function App() {
  const userName = useAppSelector(userNameSelector)
  const userAuthFlag = useAppSelector(userAuthFlagSelector);
 return(
   <Wrapper>
    {userName.length <= 0 ? <AskingNameModalWindow/> : null}
    <TrelelloApp/>
   
   </Wrapper>
 )
}

const Wrapper = styled.div`
`
export default App;
