import React from 'react';
import useTitle from '../hooks/useTitle';



const Blog = () => {
    useTitle('Blog');

    return (
        <>
            <h1 className='text-3xl font-bold text-center my-4'>Blog</h1>

            <div className="hero bg-base-200 my-4">
                <div className="hero-content">
                    <div>
                        <div className="py-4">
                            <p><span className='font-bold'>Q:</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
                            <p className=""><span className='font-bold'>A:</span> Access Token is a credential used to access protected resources or perform authorized actions.
                                <br />
                                Refresh Token is a long-lived credential used to obtain a new access token without re-authentication.
                                <br />
                                Storage on Client-side: Securely store access tokens in memory or client-side storage. Encrypt and protect refresh tokens in a secure storage mechanism.</p>
                        </div>
                        <div className="py-4">
                            <p><span className='font-bold'>Q:</span> Compare SQL and NoSQL databases?</p>
                            <p className=""><span className='font-bold'>A:</span>SQL Databases are Structured, fixed schema, good for complex transactions.

                                NoSQL Databases are Flexible, scalable, handle unstructured data.</p>
                        </div>
                        <div className="py-4">
                            <p><span className='font-bold'>Q:</span> What is express js? What is Nest JS?</p>
                            <p className=""><span className='font-bold'>A:</span> Express.js is a Minimalistic web framework for Node.js.
                                <br />
                                Nest.js is a TypeScript-based framework built on Express.js for scalable applications.</p>
                        </div>
                        <div className="py-4">
                            <p><span className='font-bold'>Q:</span>
                                What is MongoDB aggregate and how does it work?</p>
                            <p className=""><span className='font-bold'>A:</span> MongoDB Aggregate is a pipeline-based framework for advanced data aggregation and processing in MongoDB. It allows performing operations like grouping, filtering, sorting, and transforming data using a sequence of stages. The output of each stage is passed to the next stage, enabling flexible and efficient data manipulations.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;