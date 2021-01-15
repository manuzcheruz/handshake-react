import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Auth/Login/Login'

import './App.css';
import Signup from './components/Auth/Signup/Signup';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Layout>
          {/* going to add routes here and enable lazy loading for them */}
          <Route path="/" component={LandingPage} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
