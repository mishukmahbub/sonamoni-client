
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const ToyDetails = () => {
    useTitle('Toy Details');
    const { picture_url, name, seller_name, seller_email, price, rating, available_quantity, detail_description } = useLoaderData();

    return (
        <div>
            {/* banner */}
            <div className='my-10'>
                <div className="card lg:card-side bg-base-100 shadow-xl w-auto">
                    <figure className='ps-8'>
                        <img src={picture_url} alt="" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{name}</h2>
                        <p><span className='font-semibold'>Seller:</span> {seller_name}</p>
                        <p><span className='font-semibold'>Seller Email:</span> {seller_email}</p>
                        <p><span className='font-semibold'>Price:</span> {price}</p>
                        <p><span className='font-semibold'>Rating:</span> {rating}</p>
                        <p><span className='font-semibold'>Available Quantity:</span> {available_quantity}</p>
                        <p><span className='font-semibold'>Details:</span> {detail_description}</p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ToyDetails;