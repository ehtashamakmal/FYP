import React, { useState } from 'react';
import '../../styles/authStyles.css';
import { Helmet } from 'react-helmet';
import Layout from '../Layout/layout.js';
const Dashboard = () => {
  return (
  
    <>
     <Layout />
      <Helmet>
        <title>Recruiter Dashboard - Recruit Harbor</title>
      </Helmet>
    </>
  )
}

export default Dashboard