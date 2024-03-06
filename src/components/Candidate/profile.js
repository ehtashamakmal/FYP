import React from 'react'
import '../../styles/authStyles.css';
import { Helmet } from 'react-helmet';
import Layout from '../Layout/layout.js';
import Sidebar from '../Sidebar/Sidebar.js';

const profile = () => {
  return (
 <>
 
 <Layout />
      <Helmet>
        <title>Candidate Profile  - Recruit Harbor</title>
      </Helmet>

      <div className="dashboard-container">
      <Sidebar />
      </div>
 </>
  )
}

export default profile