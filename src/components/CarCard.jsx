
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import { AuthContext } from '../contexts/AuthProvider';


const CarCard = ({ car }) => {
    const { user } = useContext(AuthContext);
    const showAlert = () => {
        Swal.fire({
            title: 'Please Login',
            text: 'You have to login first to see details',
            icon: 'warning',
            confirmButtonText: 'OK',
            timer: 2000,
            // Additional options...
        });
    };
    const { _id, picture_url, name, price, rating } = car;
    return (
        <div className=''>
            <div className="card lg:card-side bg-base-100 shadow-xl w-auto">
                <figure className='md:w-40 object-cover'><img src={picture_url} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p><span className='font-semibold'>Price:</span> ${price}</p>
                    <p><span className='font-semibold'>Rating:</span> {rating}</p>

                    <div className="card-actions">
                        <Link to={`/toy-details/${_id}`}>
                            {
                                user ?
                                    <button className="btn btn-primary">View Details</button> :
                                    <button className="btn btn-primary" onClick={showAlert}>View Details</button>
                            }
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CarCard;