import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { API } from "../../utils/API"

const NewPostForm = () => {

  const timestamp = Date.now();
  const time = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timestamp)
  const { user } = useAuth0();
  const { sub } = user;
  const userID = sub;
  const [input, setInput] = useState({
    title: "",
    description: "",
    image: "",
    latitude: "",
    longitude: "",
    visitDate: "",
    userID: "",
    timestamp: ""
  });

  function handleChange(event) {

    const { name, value } = event.target
    setInput({ ...input, [event.target.name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput({ title: "", description: "", image: "", visitDate: "" })

    const newPost = {
      title: input.title,
      description: input.description,
      image: input.image,
      latitude: input.latitude,
      longitude: input.longitude,
      visitDate: input.visitDate,
      userID: userID,
      timestamp: time
    }
    console.log(newPost);
    API.savePost(newPost).catch(e => console.log(e))
  }

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input name="title" required
        onChange={handleChange}
        value={input.title} />
      <label htmlFor="description">Description</label>
      <input name="description" rows={3}
        value={input.description}
        onChange={handleChange}
      />
      <label htmlFor="image">Image</label>
      <input name="image"
        value={input.image}
        onChange={handleChange}
      />
      <label htmlFor="visitDate">Visit Date</label>
      <input name="visitDate" type="date"
        value={input.visitDate}
        onChange={handleChange}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default NewPostForm;




// ====================




// import React, { useState } from "react";
// import { useForm } from "react-hook-form";
// import { createNewPost } from '../../API';

// const NewPostForm = ({ location, onClose }) => {
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState('');
    // const { register, handleSubmit } = useForm();

    // const onSubmit = async (data) => {
//         try {
//           setLoading(true);
//           data.latitude = location.latitude;
//           data.longitude = location.longitude;
//           await createNewPost(data);
//           onClose();
//         } catch (error) {
//           console.error(error);
//           setError(error.message);
//           setLoading(false);
//         }
//       };

//     return (
//         /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//         <form onSubmit={handleSubmit(onSubmit)} className="post-form">
//         { error ? <h3 className="error">{error}</h3> : null}
//         <label htmlFor="title">Title</label>
//         <input name="title" required {...register('value_name')} />
//         <label htmlFor="description">Description</label>
//         <textarea name="description" rows={3} {...register('value_name')}></textarea>
//         <label htmlFor="image">Image</label>
//         <input name="image" {...register('value_name') } />
//         <label htmlFor="visitDate">Visit Date</label>
//         <input name="visitDate" type="date" required {...register('value_name')} />
//         <button disabled={loading}>{loading ? 'Loading...' : 'Create Post'}</button>
//       </form>
//     );
// };

// export default NewPostForm;