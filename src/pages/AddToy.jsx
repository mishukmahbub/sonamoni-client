import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddToy = () => {
    const { user } = useContext(AuthContext);
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
                console.log(result);
            });
        // console.log(data);
    };


    return (
        <div>
            <form className="grid grid-cols-1" onSubmit={handleSubmit(addToy)}>
                {errors.exampleRequired && <span>This field is required</span>}

                <span className="label-text">Price</span>
                <input
                    type="text"
                    className="input w-full max-w-xs input-bordered input-info"
                    {...register("price", { required: true })}
                    placeholder="Price"

                />
                <br />
                <span className="label-text">Available Quantity</span>
                <input
                    type="text"
                    className="input w-full max-w-xs input-bordered input-info"
                    {...register("available_quantity", { required: true })}
                    placeholder="Available Quantity"

                />
                <br />
                <span className="label-text">Description</span>
                <textarea
                    className="textarea textarea-info"
                    {...register("detail_description", { required: true })}
                    placeholder="Description"

                />
                <br />
                <input onClick={notify} className="btn btn-primary btn-sm w-3/6 mx-auto" value="Update Toy Info" type="submit" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddToy;