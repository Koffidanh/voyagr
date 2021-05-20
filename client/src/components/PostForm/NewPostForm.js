import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { createNewPost } from '../../API';

const NewPostForm = ({ location, onClose }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
          setLoading(true);
          data.latitude = location.latitude;
          data.longitude = location.longitude;
          await createNewPost(data);
          onClose();
        } catch (error) {
          console.error(error);
          setError(error.message);
          setLoading(false);
        }
      };

    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form onSubmit={handleSubmit(onSubmit)} className="post-form">
        { error ? <h3 className="error">{error}</h3> : null}
        <label htmlFor="title">Title</label>
        <input name="title" required {...register('value_name')} />
        <label htmlFor="description">Description</label>
        <textarea name="description" rows={3} {...register('value_name')}></textarea>
        <label htmlFor="image">Image</label>
        <input name="image" {...register('value_name') } />
        <label htmlFor="visitDate">Visit Date</label>
        <input name="visitDate" type="date" required {...register('value_name')} />
        <button disabled={loading}>{loading ? 'Loading...' : 'Create Post'}</button>
      </form>
    );
};

export default NewPostForm;