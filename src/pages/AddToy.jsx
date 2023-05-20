import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { useForm } from 'react-hook-form';

const AddToy = () => {
    const { user } = useContext(AuthContext);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = data => {
        data.skills = selectedOption;

        fetch("http://localhost:5000/addToys", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
            });
        console.log(data);
    };


    return (
        <div>

        </div>
    );
};

export default AddToy;