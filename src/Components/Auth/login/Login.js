import React from 'react';
import { Link } from 'react-router-dom';
import UseFirebase from '../../../Hooks/useFirebase';

const Login = () => {
    const { HandleLogin, HandleGoogleLogin, handleFacebookLogin, handleGithubLogin, handleOAuthLogin, phoneLogIn, yahooLogin } = UseFirebase();
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="w-3/5 relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                    <form onSubmit={HandleLogin}>
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center space-x-5">
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">Super Market</h2>
                                    <p className="text-sm text-gray-500 font-normal leading-relaxed">login to super market profile...</p>
                                </div>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="flex flex-col">
                                        <label htmlFor='email' className="leading-loose">Email:</label>
                                        <input id="email" name='email' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="sample@email.com" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor='password' className="leading-loose">Password</label>
                                        <input id='password' name='password' type="password" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="password" />
                                    </div>

                                    <div className="pt-4 flex items-center space-x-4">
                                        <input type="submit" className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none" value="log in" />
                                    </div>
                                    <hr className='mb-3' />
                                    <Link className='my-3 text-underline text-blue' to='/reset-password'>forget your password?</Link>

                                    <hr />
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button onClick={HandleGoogleLogin} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Google</button>

                                    </div>
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button onClick={handleOAuthLogin} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Microsoft</button>

                                    </div>
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button onClick={handleFacebookLogin} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Facebook</button>

                                    </div>
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button onClick={handleGithubLogin} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Github</button>

                                    </div>
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button onClick={phoneLogIn} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Phone</button>

                                    </div>
                                    <div className="pt-4 flex items-center space-x-4">
                                        <button onClick={yahooLogin} className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Yahoo</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    );
};

export default Login;