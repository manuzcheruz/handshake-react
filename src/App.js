import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage'
import Login from './components/Auth/Login/Login'

import './App.css';
import Signup from './components/Auth/Signup/Signup';
import Jobs from './components/Job/Jobs/Jobs';
import Centers from './components/Center/Centers/Centers';
import Companies from './components/Company/Companies/Companies';
import Students from './components/Student/Students/Students';
import JobDetail from './components/Job/JobDetail/JobDetail';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/centers" exact component={Centers} />
        <Route path="/companies" exact component={Companies} />
        <Route path="/students" exact component={Students} />
        <Route path="/jobs/job" exact component={JobDetail} />
        <Layout>
          {/* going to add routes here and enable lazy loading for them */}
          <Route path="/" component={LandingPage} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
