import React from 'react';
import UseFirebase from '../../../Hooks/useFirebase';

const Register = () => {
    const { error, handleSignUp } = UseFirebase();
    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            {error ? <p className="text-red-500 text-center">{error}</p> : null}
            <div className="relative w-3/5 py-3 sm:max-w-xl sm:mx-auto">
                <form onSubmit={handleSignUp}>
                    <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
                        <div className="max-w-md mx-auto">
                            <div className="flex items-center space-x-5">
                                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                                    <h2 className="leading-relaxed">Super Market</h2>
                                    <p className="text-sm text-gray-500 font-normal leading-relaxed">Create profile to super market...</p>
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
                                        <input id='password' name='firstPassword' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="password" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label htmlFor='password' className="leading-loose">Confirm Password</label>
                                        <input id='password' name='ConfirmPassword' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="password" />
                                    </div>

                                    <div className="flex flex-col">
                                        <label htmlFor='full-name' className="leading-loose">Full Name</label>
                                        <input id='full-name' name='fullName' type="text" className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600" placeholder="Full Name" />
                                    </div>
                                </div>
                                <div className="pt-4 flex items-center space-x-4">
                                    <button className="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none">Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;