import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { newPosts } from '../../API';

const PostForm = ({ location, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            data.latitude = location.latitude;
            data.longitude = location.longitude;
            await newPosts(data);
            onClose();
        } catch (error) {
            console.log(error);
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className="new-post-form">
            { error ? <h3 className="error">{error}</h3> : null}
            {/* Title of Post */}
            <label htmlFor="title">Title</label>
            <input name="title" required ref={register} />
            {/* Description of Post */}
            <label htmlFor="description">Description</label>
            <textarea name="description" rows={3} ref={register}></textarea>
            {/* Image and Eventually Video */}
            <label htmlFor="visitDate">Visit Date</label>
            <input name="visitDate" type="date" required ref={register} />
            <button disabled={loading}>{loading ? 'Loading...' : 'Create Post'}</button>
        </form>
    );
};

export default PostForm;