
import './Styles/App.css'
import styled from 'styled-components';
import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import {
  useAppSelector,
  userNameSelector,
  userAuthFlagSelector,
  LoginPage,
  PersonalPage,
  RegistrationPage,
  AppPage,
  NotFoundPage,
  ColumnPage,
  WelcomePage,
} from './';


function App() {
  const userName = useAppSelector(userNameSelector)
  const userAuthFlag = useAppSelector(userAuthFlagSelector);
 return(
    <Routes>
      <Route
        path='/login'
        element={userAuthFlag === true ? <Navigate to={"/app"}/> : <LoginPage/>}
      />
      <Route
        path='/registration'
        element={userAuthFlag === true ? <Navigate to={"/app"}/> : <RegistrationPage/>}
      />
      <Route
        path='/app'
        element={userAuthFlag === true ? <AppPage/> : <Navigate to={"/"}/>}
      />
      <Route 
        path='/'
        element={userAuthFlag === true ? <Navigate to={"/app"}/> : <Navigate to={"/welcome"} />}
      />
      <Route
        path='*'
        element={<NotFoundPage/>}
      />
      <Route
        path='/personal'
        element={userAuthFlag === true ? <PersonalPage/> : <Navigate to={"/"}/>}
      />
      <Route
        path='welcome'
        element={userAuthFlag === true ? <AppPage/> : <WelcomePage/>}
      />
    </Routes>
 )
}

export default App;
