import React from 'react';
import { useNavigate } from 'react-router-dom';
import UseFirebase from '../../../Hooks/useFirebase';

const Accounts = () => {
    const { user, handleLogout } = UseFirebase();
    const avater = `https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`;
    const userImg = user.photoURL ? user.photoURL : avater;
    const navigate = useNavigate();
    const resetLink = () => {
        navigate('/reset-user-password');
    }
    return (
        <div className="container mx-auto">
            <div className="profile-wrapper bg-slate-100 w-4/5  mx-auto rounded shadow p-8 my-5">
                <div className="img w-72 h-72 overflow-hidden rounded-full mx-auto my-5">
                    <img className='w-full' src={userImg} alt="" />
                </div>
                <div className="profile-info">
                    <p className='text-2xl font-mono ' >Name: {user ? user.displayName : 'No user'}</p>
                    <p className='text-xl font-mono '> Email: {user ? user.email : ''}</p>
                    <button className='my-7 bg-blue-500 text-white py-3 px-10 rounded shadow' onClick={handleLogout}>Logout</button>
                    <button className='my-7 ml-3 bg-blue-500 text-white py-3 px-10 rounded shadow' onClick={resetLink}>reset password</button>
                </div>

            </div>


        </div>
    );
};

export default Accounts;