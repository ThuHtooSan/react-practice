import { useState } from 'react';
import { useEffect } from 'react';
import BlogList from './BlogList';
import Loader from './Loader';
import ErrorView from './ErrorView';

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = async () => {
    try {
      const res = await fetch('http://localhost:8000/blogs');
      if (!res.ok) throw Error(res.status);

      const blogs = await res.json();
      setBlogs(blogs);
      setError(null);
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, []);

  const errorController = () => {
    setError(null);
  }

  return (
    <div className='home'>
      { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
      { isLoading && <Loader /> }
      { error && <ErrorView error={error} errorController={errorController} /> }
    </div>
  );
}

export default Home;