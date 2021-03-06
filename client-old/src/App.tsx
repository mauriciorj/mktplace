import React from 'react';
import './App.less';

import { Route, Switch } from 'react-router-dom'

// import ApolloClient from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { HttpLink } from 'apollo-link-http';
// import { ApolloProvider } from '@apollo/react-hooks';

//apollo-client @apollo/react-hooks apollo-cache-inmemory apollo-link-http graphql graphql-tag

import MainPage from './container/mainPage/mainPage'
import RegisterOptions from './container/mainPage/register/registerOption'
import AboutUs from './container/mainPage/aboutUs/aboutUs'
import HelpCenter from './container/mainPage/helpCenter/helpCenter'
import Pricing from './container/mainPage/pricing/pricing'
import ContactUs from './container/mainPage/contactUs/contactUs'
import CreateAccountUser from './container/mainPage/createAccount/createAccountUser'
import SignIn from './container/mainPage/signIn/signIn'
import UserMainPage from './container/userPage/mainPage/mainPage'
import UserLogOut from './container/mainPage/userLogOutPage/userLogOutPage'
import UserSettingsPersonal from './container/userPage/settings/settingsPersonal'

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
        <Route path="/user/mainPage" component={UserMainPage} />
        <Route path="/user/logOut" component={UserLogOut} />
        <Route path="/user/settings/personal" component={UserSettingsPersonal} />
        <Route path="/" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
