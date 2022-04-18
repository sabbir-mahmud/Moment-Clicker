import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('answer.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className='container mx-auto'>
            <h1
                className='text-center text-2xl font-mono font-bold my-4'
            >Assignment Questions</h1>

            <div className="answers">
                {
                    blogs.map(answer => <Blog
                        key={answer.id}
                        question={answer.question}
                        answer={answer.answer}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

export default Blogs;