import React from 'react';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/FirebaseConfig';


function Welcome() {
    const navigate = useNavigate();
    const logout = ()=>{
        signOut(auth).then(() => {
            console.log("Sign Out Sucessfully")
            navigate("/")
          }).catch((error) => {
            console.error(error.message);
          });
    }
  return (
    <div className='container text-center'>
      <h1>Welcome To Home </h1>
      <button onClick={logout} type="button" className="btn btn-light">Logout</button>
    </div>
  )
}

export default Welcome
