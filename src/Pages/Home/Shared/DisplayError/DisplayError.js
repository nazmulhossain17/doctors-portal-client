import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import {AuthContext} from '../../../../contexts/AuthProvider';

const DisplayError = () => {
    const {logOut} = useContext(AuthContext)
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () =>{
        logOut()
        .then(()=>{
            navigate('/login');
        })
        .then(err => console.error(err))
    }
    return (
        <div>
            <p className='text-red-500'>Something went wrong</p>
            <p>{error.statusText || error.message}</p>
            <h4 className='text-3xl'>Please <button onClick={handleLogOut}>Sign out</button>and log back again</h4>
        </div>
    );
};

export default DisplayError;