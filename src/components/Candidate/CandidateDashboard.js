// CandidateDashboard.jsx

import React, { useState } from 'react';
import '../../styles/authStyles.css';
import { Helmet } from 'react-helmet';
import Layout from '../Layout/layout.js';
import Sidebar from '../Sidebar/Sidebar.js';
import '../../styles/dashboard.css'; // Make sure to import the new styles

const CandidateDashboard = () => {
  const [appliedJobs, setAppliedJobs] = useState([
    { id: 1, title: 'Software Engineer', company: 'ABC Inc.', skills: ['React', 'Node.js'] },
    { id: 2, title: 'Data Scientist', company: 'XYZ Corp.', skills: ['Python', 'Machine Learning'] },
  ]);

  const [interviews, setInterviews] = useState([
    { id: 1, title: 'Interview for Software Engineer', company: 'ABC Inc.', date: '2024-02-20' },
    { id: 2, title: 'Data Science Interview', company: 'XYZ Corp.', date: '2024-02-25' },
  ]);

  return (
    <>
      <Layout />
      <Helmet>
        <title>Candidate Dashboard - Recruit Harbor</title>
      </Helmet>
     
      <div className="dashboard-container">
      <Sidebar />


        <div className="content">

          <div className="column-container">


            <div className="column">
              <br/>
              <br/>
              <h3>Applied Jobs</h3>
              <br/>
              {appliedJobs.map((job) => (
                <div key={job.id} className="card">
                  <h4>{job.title}</h4>
                  <p>{job.company}</p>
                  <p className="skills">Skills: {job.skills.join(', ')}</p>
                </div>
              ))}
              
            </div>

            <div className="column">
            <br/>
            <br/>
              <h3>Interviews</h3>
              <br/>

              {interviews.map((interview) => (
                <div key={interview.id} className="card">
                  <h4>{interview.title}</h4>
                  <p>{interview.company}</p>
                  <p>Date: {interview.date}</p>
                </div>
              ))}
            </div>

          


            <div className="column">
            <br/>
            <br/>
              <h3>Interviews</h3>
              <br/>
              {interviews.map((interview) => (
                <div key={interview.id} className="card">
                  <h4>{interview.title}</h4>
                  <p>{interview.company}</p>
                  <p>Date: {interview.date}</p>
                </div>
              ))}
            </div>


       
          </div>
        </div>
      </div>
    </>
  );
};

export default CandidateDashboard;
