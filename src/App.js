import React, { Suspense } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage'

import './App.css';

// lazy loading other routes for better performance
const Login = React.lazy(() => import('./components/Auth/Login/Login'))
const Signup = React.lazy(() => import('./components/Auth/Signup/Signup'))
const Jobs = React.lazy(() => import('./components/Job/Jobs/Jobs'))
const JobDetail = React.lazy(() => import('./components/Job/JobDetail/JobDetail'))
const Centers = React.lazy(() => import('./components/Center/Centers/Centers'))
const Students = React.lazy(() => import('./components/Student/Students/Students'))
const Companies = React.lazy(() => import('./components/Company/Companies/Companies'))

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact render={() => <Suspense fallback={<h1>loading...</h1>}><Login /></Suspense>} />
        <Route path="/signup" exact render={() => <Suspense fallback={<h1>loading..</h1>}><Signup /></Suspense>} />
        <Route path="/jobs" exact render={() => <Suspense fallback={<h1>loading..</h1>}><Jobs /></Suspense>} />
        <Route path="/centers" exact render={() => <Suspense fallback={<h1>loading..</h1>}><Centers /></Suspense>} />
        <Route path="/companies" exact render={() => <Suspense fallback={<h1>loading..</h1>}><Companies /></Suspense>} />
        <Route path="/students" exact render={() => <Suspense fallback={<h1>loading..</h1>}><Students /></Suspense>} />
        <Route path="/jobs/job" exact render={() => <Suspense fallback={<h1>loading..</h1>}><JobDetail /></Suspense>} />
        <Layout>
          {/* going to add routes here and enable lazy loading for them */}
          <Route path="/" component={LandingPage} />
        </Layout>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
