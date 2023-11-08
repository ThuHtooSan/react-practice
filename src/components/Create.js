import { useState } from "react";
import SuccessView from "./SuccessView";
import ErrorView from "./ErrorView";
import Loader from "./Loader";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const errorController = () => {
    setError(null);
  }

  const successController = () => {
    setSuccess(null);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    const jsonServer = process.env.NODE_ENV === 'production'
      ? 'https://my-json-server.typicode.com/thuhtoosan/react-practice'
      : 'http://localhost:8000';

    try {
      setIsPending(true);
      const res = await fetch(`${jsonServer}/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog)
      });
      
      if(!res.ok) throw Error(res.status);

      // created blog's id
      const createdBlog = await res.json();
      const blogId = await createdBlog.id;
      
      setSuccess({ message: 'Blog Created', blogId });
    } catch (err) {
      setError({ message: 'Could Not Create Blog', status: err.message  });
    } finally {
      setIsPending(false);
    }
  }

  return (
    <div>
      <form className="blog-create" onSubmit={handleSubmit}>
        <label className="title">Add a new blog</label>
        <label>Blog title: </label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body: </label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author: </label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">Mario</option>
          <option value="yoshi">Yoshi</option>
        </select>
        { !isPending && <input type="submit" value="Create Blog" /> }
        { isPending && <input type="submit" value="Create Blog" disabled />}
      </form>

      { error && <ErrorView error={error} errorController={errorController} /> }
      { success && <SuccessView success={success} successController={successController} /> }
      { isPending && <Loader />}
    </div>
  )
}

export default Create;