import {Routes,Route} from 'react-router-dom'
import './App.css';
import Register from './components/Auth/CandidateSignUp';
import Recruiter from './components/Auth/RecruiterSignUp';
import Login from './components/Auth/Login';
import CandidateDashboard from './components/Candidate/CandidateDashboard'
import PrivateRoute from './components/Routes/PrivateRoute';
import RecruiterDashboard from './components/Recruiter/Dashboard';
import CandidateProfile from './components/Candidate/profile';
import UploadResume from './components/Candidate/UploadResume';
function App() {
  return (
   <>
  <Routes>

  <Route path="/dashboard/*" element={<PrivateRoute />}>
          <Route index element={<CandidateDashboard />} />
          <Route path="upload-resume" element={<UploadResume />} />
          <Route path="profile" element={<CandidateProfile />} />
        </Route>

<Route path="/recruiter-dashboard" element={<PrivateRoute />}>
          <Route path="" element={<RecruiterDashboard />} />
        </Route>



  <Route path='/registercandidate' element={<Register/>}/>
  <Route path='/registerrecruiter' element={<Recruiter/>}/>
  <Route path='/' element={<Login/>}/>
  </Routes> 
   </>
  );
}

export default App;
