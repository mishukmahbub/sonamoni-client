import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../hooks/useTitle';

const AddToy = () => {
    useTitle('Add a Toy');
    const { user } = useContext(AuthContext);
    // console.log(user);
    const notify = () => toast("Toy Info Updated!");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const addToy = data => {
        fetch("http://localhost:5000/addToys", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                // console.log(result);
            });
        // console.log(data);
    };


    return (
        <div className='my-4'>
            <h3 className="text-lg font-bold text-center">Add New Toy</h3>
            <br />
            <form className="grid grid-cols-1 text-center" onSubmit={handleSubmit(addToy)}>
                {errors.exampleRequired && <span>This field is required</span>}

                
                <input
                    type="text"
                    className="input w-full max-w-xs input-bordered input-info text-center mx-auto"
                    {...register("name", { required: true })}
                    placeholder="Toy Name"

                />
                <br />
                
                <input
                    type="text"
                    className="input w-full max-w-xs input-bordered input-info text-center mx-auto"
                    {...register("picture_url", { required: true })}
                    placeholder="Image URL"

                />
                <br />
                
                <input
                    type="text"
                    className="input w-full max-w-xs input-bordered input-info text-center mx-auto"
                    {...register("seller_name", { required: true })}
                    placeholder="Seller Name"
                    defaultValue={user?.displayName}

                />
                <br />
                
                <input
                    type="email"
                    className="input w-full max-w-xs input-bordered input-info text-center mx-auto"
                    {...register("seller_email", { required: true })}
                    placeholder="Seller Email"
                    value={user?.email}

                />
                <br />
                
                <input
                    type="number"
                    step="0.01"
                    className="input w-full max-w-xs input-bordered input-info text-center mx-auto"
                    {...register("price", { required: true })}
                    placeholder="Price"

                />
                <br />
                
                <input
                    type="number"
                    className="input w-full max-w-xs input-bordered input-info text-center mx-auto"
                    {...register("available_quantity", { required: true })}
                    placeholder="Available Quantity"

                />
                <br />
                
                <input
                    type="number"
                    step="0.01"
                    className="input w-full max-w-xs input-bordered input-info text-center mx-auto"
                    {...register("rating", { required: true })}
                    placeholder="Rating"

                />
                <br />
                
                <input
                    type="text"
                    className="input w-full max-w-xs input-bordered input-info text-center mx-auto"
                    {...register("sub_category", { required: true })}
                    placeholder="Sub Category"

                />
                <br />

                <textarea
                    className="textarea textarea-info text-center mx-auto w-full max-w-xs"
                    {...register("detail_description", { required: true })}
                    placeholder="Description"

                />
                <br />
                <input onClick={notify} className="btn btn-primary btn-sm mx-auto w-full max-w-xs" value="Add Toy" type="submit" />
                <br />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddToy;