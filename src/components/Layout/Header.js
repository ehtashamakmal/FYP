import {React}from 'react'
import { FaBriefcase , FaUser} from 'react-icons/fa';
import { AiOutlineTrophy } from 'react-icons/ai';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../context/auth';
import  {toast} from 'react-hot-toast';
const Header = () => {

    const [auth,setAuth] = useAuth();

    const handlelogout =() =>{

        setAuth({
            ...auth, user:null,token:''
        })
        localStorage.removeItem('auth');
        toast.success('Logout SuccessFully');

    }
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: 'darkblue' }}>
                <div className="container-fluid">
                    <a style={{color:"white"}} className="navbar-brand" href="#" > Recruit Harbor</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        {/* <li class="nav-item">
                           <a style={{color:"white"}} className="nav-link active" aria-current="page" href="/login">Login</a>
                           </li> */}
                           
                            {/* <li className="nav-item dropdown">
                                <a style={{color:"white"}} className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sign Up
                                </a>
                                <ul style={{color:"black" , backgroundColor: "white" }} className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a style={{color:"black"}} className="dropdown-item" href="/registercandidate"> <b>Candidate</b></a></li>
                                    <li><a style={{color:"black"}} className="dropdown-item" href="/registerrecruiter"><b>Recruiter</b></a></li>
                                    
                                </ul>
                            </li> */}
                           

                            <li class="nav-item">
                           {/* <a style={{color:"white"}} class="nav-link "  onClick={handlelogout} to="/" aria-current="page">Logout</a> */}
                           <NavLink  onClick={handlelogout} to="/" style={{color:"white"}} className="nav-link"  >Logout</NavLink>
                           </li>
                        </ul>

                        
                        <form className="d-flex">
                            <input style={{color:"black"}} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button style={{color:"white"}} className="btn btn-outline-success" type="submit">Search</button>
                        </form>


                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header