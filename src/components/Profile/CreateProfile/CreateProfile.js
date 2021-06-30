import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';

const CreateProfile = () => {

    const [loader, setLoader] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data)

        fetch('http://localhost/api/submit_form.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.text())
            .then(data => {
                setLoader(true);
                setTimeout(() => {
                    setLoader(false)
                    toast('New User created successfully.');
                    console.log(data)
                }, 4000)

            })
    };




    return (
        <div className="my-5">
            <Toaster />
            <h3 className="my-4">Adding User Profile</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="row">
                <div className="mb-3">
                    <label htmlFor="id" className="form-label">ID</label>
                    <input {...register("id", { required: true })} type="number" className="form-control" id="id" />
                    {errors.id && <span>This field is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input {...register("name", { required: true })} type="text" className="form-control" id="name" />
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Feedback Message</label>
                    <input {...register("message", { required: true })} type="text" className="form-control" id="message" />
                    {errors.message && <span>This field is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="created_at" className="form-label">Submission Date</label>
                    <input {...register("created_at", { required: true })} type="text" className="form-control" id="created_at" />
                    {errors.created_at && <span>This field is required</span>}
                </div>
                {
                    loader &&
                    <div class="spinner-border ms-auto text-end" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                }
                <button type="submit" className="btn btn-primary w-50 ms-auto" disabled={loader}>Submit</button>
            </form>
        </div>
    );
};

export default CreateProfile;