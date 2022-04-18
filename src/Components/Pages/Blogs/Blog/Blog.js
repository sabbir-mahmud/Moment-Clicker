// imports
import React from 'react';

// blog component
const Blog = ({ question, answer }) => {
    return (
        <div className='w-4/5 mx-auto p-5 my-5 bg-gray-600 rounded shadow'>
            <h1 className='text-center text-gray-100 text-2xl font-mono font-bold mb-4'
            >{question}</h1>
            <p className='text-justify text-gray-100 text-sm  font-mono  mb-4'>{answer}</p>
        </div>
    );
};

export default Blog;