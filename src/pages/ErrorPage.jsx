// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error');
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                <figure className=''>
                    <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="" />
                </figure>
                <div className='max-w-md text-center mt-8'>
                    <Link
                        to='/'
                        className='px-8 py-3 font-semibold rounded bg-cyan-200 text-gray-900'
                    >
                        Back to homepage
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage