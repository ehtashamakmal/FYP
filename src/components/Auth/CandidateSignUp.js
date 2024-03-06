import React, { useState } from 'react'
import Layout from '../Layout/layout'
import toast from 'react-hot-toast';
import axios from 'axios';
import "../../styles/authStyles.css";
import {Helmet} from 'react-helmet'
import { useNavigate } from 'react-router-dom';
import {FaBuilding} from 'react-icons/fa';



const Register = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [favSports, setfavSports] = useState("");
    const [gender, setGender] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [username, setUserName] = useState("");
    const [role,setRole] = useState("");
    const navigate = useNavigate();

    // //form 

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/registercandidate',{
                name,
                email,
                password,
                phone,
                address,
                favSports,
                gender,
                dateOfBirth,
                username,
                role
            });
            if( res && res.data.success){
                toast.success(res.data && res.data.message)
                navigate('/login')
            }
            else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error('Something went Wrong')

        }
    };

    return (
        <>

<Helmet>
 <title> Candidate Register - Recruit Harbor</title>
 </Helmet>
            
 <div className="container mt-10">
        <div className="row">
          {/* Form Container */}
          <div className="col-md-8">
            <div className='form-container'>
                <br></br>
                <h1 style={{ color: "white" }}>Join Us Today as Candidate</h1>
                {/* <FaBuilding size={50} style={{color:'white'}} /> */}
                <br></br>
                <form onSubmit={handleSubmit}>

                 
                    <div className="mb-3">

                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="name" placeholder='Enter your Name' required />

                    </div>


                    <div className="mb-3">

                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="email" placeholder='Enter your Email' required />

                    </div>


                    <div className="mb-3">

                        <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} className="form-control" id="username" placeholder='Enter your UserName' required />

                    </div>



                    <div className="mb-3">

                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="password" placeholder='Enter your Password' required />
                    </div>


                    <div className="mb-3">

                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="phone" placeholder='Enter your Phone' required />

                    </div>


                    <div className="mb-3">

                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="address" placeholder='Enter your Address' required />

                    </div>


                    <div className="mb-3">

                        <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="form-control" id="role" placeholder='Enter your Role' required />

                    </div>


                    <div className="mb-3">

                        <input type="text" value={favSports} onChange={(e) => setfavSports(e.target.value)} className="form-control" id="favSports" placeholder=' What is Your Fav Sports' required />

                    </div>


                    <div className="mb-3">
                        <select
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                            className="form-select"
                            id="gender"
                            required
                        >
                            <option value="" disabled>Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>

                        </select>
                    </div>

                    <div className="mb-3">

                        <center><label htmlFor="dob" className="placeholder-text">
                            Enter Date Of Birth
                        </label>
                        </center>

                        <input
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            className="form-control"
                            id="dob"
                            required
                        />


                    </div>


                    <button type="submit" className="btn btn-primary" style={{ backgroundColor: "darkblue" }}>SIGN UP</button>
                </form>
            </div>
            </div>
            <div className="col-md-4">
  <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '100.0000%', paddingBottom: 0, marginTop: '12em', marginBottom: '12em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
    <iframe
      style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, margin: 0, padding: 0 }}
      src="https://www.canva.com/design/DAF9t0fX3Jw/W8KEcqKBT4xVSJt0u1DyHA/view?embed"
    />
  </div>
</div>

            </div>
            </div>
        </>
    )
}

export default Register