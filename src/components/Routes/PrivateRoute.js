import { useState, useEffect } from "react";
import { useAuth } from "../../context/auth";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
    const [ok, setOk] = useState(false);
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const authCheck = async () => {
           
                const res = await axios.get('/api/v1/auth/user-auth'
                
                );
                if (res.data.ok) {
                    setOk(true);
                    
                } else {
                    setOk(false);
                    navigate('/'); // Redirect to login if not authenticated
                }
           
                // console.error('Error checking authentication:', error);
                // setOk(false);
                // navigate('/');
            
        };

        if (auth?.token) {
            authCheck();
        } else {
            setOk(false);
            navigate('/');
        }
    }, [auth?.token, navigate]);

    return ok ? <Outlet /> : <Spinner />;
}
