import React, { Suspense, useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { toggleNightMode } from './Store/actions'

import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage'

import './App.css';

// lazy loading other routes for better performance
const Login = React.lazy(() => import('./components/Auth/Login/Login'))
const Signup = React.lazy(() => import('./components/Auth/Signup/Signup'))
const Jobs = React.lazy(() => import('./components/Job/Jobs/Jobs'))
const JobDetail = React.lazy(() => import('./components/Job/JobDetail/JobDetail'))
const Centers = React.lazy(() => import('./components/Center/Centers/Centers'))
const CenterDetail = React.lazy(() => import('./components/Center/CenterDetail/CenterDetail'))
const Students = React.lazy(() => import('./components/Student/Students/Students'))
const Companies = React.lazy(() => import('./components/Company/Companies/Companies'))
const CompanyDetail = React.lazy(() => import('./components/Company/CompanyDetail/CompanyDetail'))
const StudentForm = React.lazy(() => import('./components/Forms/StudentForm/StudentForm'))

function App(props) {
  const { onToggleNightMode } = props
  useEffect(() => {
    let time = new Date().getHours()
    if (time < 6 || time > 19) {
      onToggleNightMode()
    } 
  }, [onToggleNightMode])
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact render={() => <Suspense fallback={<h1>loading...</h1>}><Login /></Suspense>} />
        <Route path="/signup" exact render={() => <Suspense fallback={<h1>loading..</h1>}><Signup /></Suspense>} />
        <Route path="/jobs" exact render={() => <Suspense fallback={<h1>loading..</h1>}><Jobs /></Suspense>} />
        <Route path="/centers" exact render={() => <Suspense fallback={<h1>loading..</h1>}><Centers /></Suspense>} />
        <Route path="/centers/center" exact render={() => <Suspense fallback={<h1>loading..</h1>}><CenterDetail /></Suspense>} />
        <Route path="/companies" exact render={() => <Suspense fallback={<h1>loading..</h1>}><Companies /></Suspense>} />
        <Route path="/companies/company" exact render={() => <Suspense fallback={<h1>loading..</h1>}><CompanyDetail /></Suspense>} />
        <Route path="/students" exact render={() => <Suspense fallback={<h1>loading..</h1>}><Students /></Suspense>} />
        <Route path="/jobs/job" exact render={() => <Suspense fallback={<h1>loading..</h1>}><JobDetail /></Suspense>} />
        <Route path="/student-register" exact render={() => <Suspense fallback={<h1>loading..</h1>}><StudentForm /></Suspense>} />
        <Layout>
          {/* going to add routes here and enable lazy loading for them */}
          <Route path="/" component={LandingPage} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onToggleNightMode: () => dispatch(toggleNightMode())
  }
}

export default connect(null, mapDispatchToProps)(App);
