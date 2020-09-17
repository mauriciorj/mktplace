import React from 'react';
import './App.less';

import { Route, Switch } from 'react-router-dom'

import MainPage from './container/mainPage/mainPage'
import RegisterOptions from './container/mainPage/register/registerOption'
import AboutUs from './container/mainPage/aboutUs/aboutUs'
import HelpCenter from './container/mainPage/helpCenter/helpCenter'
import Pricing from './container/mainPage/pricing/pricing'
import ContactUs from './container/mainPage/contactUs/contactUs'
import CreateAccountUser from './container/mainPage/createAccount/createAccountUser'
import SignIn from './container/mainPage/signIn/signIn'
import UserMainPage from './container/userPage/mainUserPage/mainUserPage'
import LogOutUser from './container/mainPage/logOutUserPage/logOutUserPage'
import UserComponent from './container/userPage/userSettings/initialUserSetting'

function App() {
  return (
    <>
      <Switch>
        <Route path="/registerOptions" component={RegisterOptions} />
        <Route path="/helpCenter" component={HelpCenter} />
        <Route path="/aboutUs" component={AboutUs} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contactUs" component={ContactUs} />
        <Route path="/createAccountUser" component={CreateAccountUser} />
        <Route path="/signIn" component={SignIn} />
        <Route path="/userMainPage" component={UserMainPage} />
        <Route path="/logOutUser" component={LogOutUser} />
        <Route path="/userSettings" component={UserComponent} />
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
