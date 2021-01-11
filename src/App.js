import React from 'react'
import Layout from './hoc/Layout/Layout';
import LandingPage from './components/LandingPage/LandingPage'

import './App.css';

function App() {
  return (
    <Layout>
      {/* going to add routes here and enable lazy loading for them */}
      <LandingPage />
    </Layout>
  );
}

export default App;
