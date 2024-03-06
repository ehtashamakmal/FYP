import React, { useState } from 'react'
import Layout from '../Layout/layout'
// import toast from 'react-hot-toast';
// import axios from 'axios';
import "../../styles/authStyles.css";
// import { useNavigate } from 'react-router-dom';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdWork } from 'react-icons/md';


const Register = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [favSports, setfavSports] = useState("");
    const [CompanyName, setCompanyName] = useState("");
    const [startDate, setStartDate] = useState("");
   
    // const navigate = useNavigate();

    // //form 

    // const handleSubmit = async(e) =>{
    //     e.preventDefault();
    //     try {
    //         const res = await  axios.post('/api/v1/auth/register' ,{
    //             name,
    //             email,
    //             password,
    //             phone,
    //             address,
    //             answer,
    //         });
    //         if( res && res.data.success){
    //             toast.success(res.data && res.data.message)
    //             navigate('/login')
    //         }
    //         else{
    //             toast.error(res.data.message)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //         toast.error('Something went Wrong')

    //     }
    // };

    return (
        <>

            {/* <Layout title="Register - Restraunt App">
            </Layout> */}
            <div className="container mt-10">
        <div className="row">
          {/* Form Container */}
          <div className="col-md-8">
            <div className='form-container'>
                <br></br>
                {/* <h1 style={{color: "white" }}>Join Us Today as Recruiter</h1> */}
                <   MdWork  size={50} style={{color:'white'}}  />
                <br></br>
                <form >

                    {/* onSubmit={handleSubmit} */}
                    <div className="mb-3">

                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your Name' required />

                    </div>


                    <div className="mb-3">

                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your Email' required />

                    </div>


                    <div className="mb-3">

                        <input type="text" value={CompanyName} onChange={(e) => setCompanyName(e.target.value)} className="form-control" id="userName" placeholder='Enter your CompanyName' required />

                    </div>



                    <div className="mb-3">

                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter your Password' required />
                    </div>


                    <div className="mb-3">

                        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your Phone' required />

                    </div>


                    <div className="mb-3">

                        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter your Address' required />

                    </div>


                    <div className="mb-3">

                        <input type="text" value={favSports} onChange={(e) => setfavSports(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder=' What is Your Fav Sports' required />

                    </div>


                 

                    <div className="mb-3">

                    <center><label htmlFor="dob" className="placeholder-text">
                     Enter Start Date of Company
                    </label>
                    </center>

                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="form-control"
                        id="dob"
                        required
                    />


                </div>

            
                    <button type="submit" className="btn btn-primary" style={{backgroundColor: "darkblue" }}>SIGN UP</button>
                </form>
            </div>
            </div>
            <div className="col-md-4">
            <div style={{ position: 'relative', width: '100%', height: 0, paddingTop: '100.0000%', paddingBottom: 0, boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '12em', marginBottom: '12em', overflow: 'hidden', borderRadius: '8px', willChange: 'transform' }}>
  <iframe
    
    style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, margin: 0 }}
    src="https://www.canva.com/design/DAF9u9hOWV0/7t0H7mvfvEfPf72P5zzXLw/view?embed"
    allowFullScreen
    allow="fullscreen"
  />
</div>
            </div>
            </div>
            </div>
        </>
    )
}

export default Register