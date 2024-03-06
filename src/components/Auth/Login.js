import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../Layout/layout';
import { FaBriefcase , FaUser} from 'react-icons/fa';
import toast from 'react-hot-toast';
import axios from 'axios';
import '../../styles/authStyles.css';
import { useAuth } from '../../context/auth.js';
import Img from '../../Images/Recruit_harbor.jpg';
import {Helmet} from 'react-helmet'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [auth, setAuth] = useAuth();

  const nav = useNavigate();
  const location = useLocation();

  // form control
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/v1/auth/login', {
        email,
        password,
        role,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem('auth', JSON.stringify(res.data));
        nav(location.state || '/dashboard');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <>
      {/* <Layout title="Recruiter Login - Recruit Harbor">
      </Layout> */}
      <Helmet>
 <title> Login - Recruit Harbor</title>
 </Helmet>

      <div className="container mt-10">
        <div className="row">
          {/* Form Container */}
          <div className="col-md-6">
            <div className="form-container">
              <FaUser size={50} style={{color:'white'}} />
              <br></br>
              {/* <h1 style={{ color: 'white', textAlign: 'right', paddingRight: '20px' }}>LOGIN FORM</h1> */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder=" Email" required />
                </div>

                <div className="mb-3">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder=" Password" required />
                </div>

                <div className="mb-3">
                  <select value={role} onChange={(e) => setRole(e.target.value)} className="form-select" id="role" required>
                    <option value="" disabled>Select Role</option>
                    <option value="Candidate">Candidate</option>
                    <option value="Recruiter">Recruiter</option>
                    <option value="Admin">Admin</option>
                  </select>
                </div>

                <div className="mb-3">
                  <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'darkblue' }} onClick={() => { nav('/forgot-password') }}>FORGOT PASSWORD</button>
               </div>

<div className='mb-3'>
                <button type="submit" className="btn btn-primary" style={{ backgroundColor: 'darkblue' }}>SIGN IN</button>

                </div>
                
                <div className='mb-3'>


                <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary dropdown-toggle"
          style={{ backgroundColor: 'darkblue' }}
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          SIGN UP 
        </button>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="/registercandidate">
             As Candidate
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="/registerrecruiter">
             As Recruiter
            </a>
          </li>
          {/* Add more items as needed */}
        </ul>
      </div>
                </div> 
              </form>
            </div>
          </div>

          {/* Image Container */}
          <div className="col-md-6">
      <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '100.0000%', paddingBottom: 0, marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
        <iframe
          
          style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, padding: 0, margin: 0 }}
          src="https://www.canva.com/design/DAF9stTE8L4/jYSElR2UbPvPEo0L_wxKhQ/view?embed"
        />
      </div>
    
         
     

        {/* <img 
          src='https://static.vecteezy.com/system/resources/previews/024/444/781/original/employment-recruitment-concept-job-vacancy-features-human-resources-selecting-candidates-for-hire-perfect-for-landing-pages-ui-web-app-editorial-flyers-and-banners-illustration-vector.jpg'
          alt="Professional Image"
          style={{  width: '700px', height: '700px', backgroundColor:'blue' }}
        /> */}
      </div>
    </div>
      </div>
      
    </>
  );
};

export default Login;
