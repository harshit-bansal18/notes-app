import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import MainPage from './Authentication/index.js';
import SignInWindow from './Authentication/signIn.js';
import SignUpWindow from './Authentication/signUp.js';
import MyNotes from './NoteComponents/MyNotes/myNotes';
import BaseLayout from './NoteComponents/index';
import { AuthProvider} from './contexts/AuthContext';
import ForgotPassword from './Authentication/forgotPassword';
import {NoteContextProvider} from './contexts/NoteContext';
ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
  <NoteContextProvider>
            <Router basename={process.env.PUBLICURL}>
        <Switch>
        
        <Route exact path='/'>
                <BaseLayout page={<MyNotes/>}/>
            </Route>
           
            <Route  path='/login'>
                <MainPage display={<SignInWindow/>}/>
            </Route>
            <Route exact path='/signUp'>
                <MainPage display={<SignUpWindow/>}/>
            </Route>
            <Route path='/forgot-password'>
                <MainPage display={<ForgotPassword/>}/>
            </Route>
            <Route path='/'>
                ERROR 404 
                Page not found
            </Route>
        </Switch>
        
    </Router>
    </NoteContextProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
