import React from 'react';
import { useForm } from 'react-hook-form';

const EditToyModal = (props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { handleToyEdit, toy, notify } = props;
    const { _id, price, available_quantity, detail_description } = toy;
    // console.log(price);

    return (
        <div>
            {/* The button to open modal */}
            {/* <label htmlFor="my-modal-3" className="btn">open modal</label> */}

            {/* Put this part before </body> tag */}
            <input type="checkbox" id={toy._id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-3/12 max-w-5xl">
                    <label htmlFor={toy._id} className="btn btn-error btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Edit Toy Info</h3>

                    <form className="grid grid-cols-1"
                        onSubmit={handleSubmit(handleToyEdit)}
                    >
                        {errors.exampleRequired && <span>This field is required</span>}
                        <input
                            className="hidden"
                            {...register("_id")}
                            value={_id}
                        />
                        <span className="label-text">Price</span>
                        <input
                            type="text"
                            className="input w-full max-w-xs input-bordered input-info"
                            {...register("price", { required: true })}
                            placeholder="Price"
                            defaultValue={price}
                        />
                        <br />
                        <span className="label-text">Available Quantity</span>
                        <input
                            type="text"
                            className="input w-full max-w-xs input-bordered input-info"
                            {...register("available_quantity", { required: true })}
                            placeholder="Available Quantity"
                            defaultValue={available_quantity}
                        />
                        <br />
                        <span className="label-text">What is your name?</span>
                        <textarea
                            className="textarea textarea-info"
                            {...register("detail_description", { required: true })}
                            placeholder="Description"
                            defaultValue={detail_description}
                        />
                        <br />
                        <input onClick={notify} className="btn btn-primary btn-sm w-3/6 mx-auto" value="Update Toy Info" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditToyModal;