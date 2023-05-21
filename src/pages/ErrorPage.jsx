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
                    <img src="https://thumbs.dreamstime.com/b/print-144211553.jpg" alt="" className='w-11/12'/>
                </figure>
            </div>
            <div className='text-center'>
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