import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllToys = () => {
    const allToys = useLoaderData();
    const [toys, setToys] = useState(allToys)
    const [displayedToys, setDisplayedToys] = useState(20);
    const toysToDisplay = toys.slice(0, displayedToys)
    const hasMoreResults = allToys.length > displayedToys;

    const [searchText, setSearchText] = useState("");
    const handleSearch = () => {
        fetch(`https://b7a11-toy-marketplace-server-side-mishukmahbub.vercel.app/getToysByText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };


    const loadMoreResults = () => {
        setDisplayedToys(displayedToys + 20);
    };
    return (
        <div className='my-8'>
            <div className="form-control my-4">
                <div className="input-group flex justify-center">
                    <input type="text" placeholder="Search by Toy Name" className="input input-bordered" onChange={(e) => setSearchText(e.target.value)} />
                    <button className="btn btn-square" onClick={handleSearch}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toysToDisplay?.map((toy, index) => (

                            <tr key={toy._id}>
                                <th>{index + 1}</th>
                                <td>{toy.seller_name}</td>
                                <td>{toy.name}</td>
                                <td>{toy.sub_category}</td>
                                <td>{toy.price}</td>
                                <td>{toy.available_quantity}</td>
                                <th>
                                    <Link to={`/toy-details/${toy._id}`}><button className="btn btn-ghost btn-xs">view details</button></Link>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Render the "Load More" button */}
            {hasMoreResults && <div className='text-center my-4'>
                <button className='btn btn-primary' onClick={loadMoreResults}>Load More</button>
            </div>}
        </div >
    );
};

export default AllToys;