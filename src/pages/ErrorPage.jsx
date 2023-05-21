// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error');
    return (
        <section className='h-screen'>
            <div className='container flex flex-col items-center mx-auto'>
                <figure className=''>
                    <img src="https://img.freepik.com/free-vector/hand-drawn-404-error_23-2147735153.jpg?w=500" alt="" className=''/>
                </figure>
            </div>
            <div className='text-center py-8'>
                <Link
                    to='/'
                    className='px-8 py-3 font-semibold rounded btn-secondary'
                >
                    Back to homepage
                </Link>
            </div>
        </section>
    )
}

export default ErrorPage