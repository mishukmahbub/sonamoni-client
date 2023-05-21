import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import EditToyModal from '../components/EditToyModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/useTitle';

const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);
    const [control, setControl] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [sort, setSort] = useState("desc");


    const notify = () => toast("Toy Info Updated!");
    const notifyDelete = () => toast("Toy Deleted!");

    useEffect(() => {
        fetch(`https://b7a11-toy-marketplace-server-side-mishukmahbub.vercel.app/myToys/${user?.email}?sort=${sort}`)
        
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setToys(data);
            });
    }, [user, control, sort]);

    const handleToyEdit = data => {
        // console.log(data)

        fetch(`https://b7a11-toy-marketplace-server-side-mishukmahbub.vercel.app/editToy/${data._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })

            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setControl(!control);
                }
                // console.log(result);
            });
        setShowModal(false);
    };

    const handleToyDelete = id => {
        const proceed = confirm('Are You sure you want to delete?');
        if (proceed) {
            fetch(`https://b7a11-toy-marketplace-server-side-mishukmahbub.vercel.app/deleteToy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        // alert('deleted successfully');
                        setControl(!control);
                    }
                })
        }
    }

    const handleSort = (order) => {
        setSort(order);
      };

    return (
        <div className="overflow-x-auto">
            <div className='text-center my-4'>
                <span className='font-bold'>Sort by Price: </span>
                <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
                    <button onClick={() => handleSort('asc')} className="btn btn-xs btn-primary hover:btn-primary-focus">Low to High</button>
                    <button onClick={() => handleSort('desc')} className="btn btn-xs btn-primary hover:btn-primary-focus">High to Low</button>
                </div>
            </div>
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
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {toys?.map((toy, index) => (
                        <tr key={toy._id}>
                            <th>{index + 1}</th>
                            <td>{toy.seller_name}</td>
                            <td>{toy.name}</td>
                            <td>{toy.sub_category}</td>
                            <td>{toy.price}</td>
                            <td>{toy.available_quantity}</td>
                            <th>
                                {/* <button className="btn btn-ghost btn-xs" onClick={() => setModalShow(true) }>Edit</button> */}
                                <label htmlFor={toy._id} className="btn btn-ghost btn-xs" onClick={() => setShowModal(true)}>Edit</label>
                                {
                                    showModal &&
                                    <EditToyModal
                                        key={toy._id}
                                        // show={modalShow}
                                        // onHide={() => setModalShow(false)}
                                        // setModalShow={setModalShow}
                                        toy={toy}
                                        handleToyEdit={handleToyEdit}
                                        notify={notify}
                                    />
                                }
                            </th>

                            <th>
                                <button onClick={() => { handleToyDelete(toy._id); notifyDelete(); }} className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ToastContainer />
        </div>
    );
};

export default MyToys;