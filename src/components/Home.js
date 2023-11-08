import BlogList from './BlogList';
import Loader from './Loader';
import ErrorView from './ErrorView';
import useFetch from './useFetch';

const Home = () => {
  const { data: blogs, isPending, error, errorController } = useFetch({
    url: 'http://localhost:8000/blogs',
    errorMessage: 'Could Not Fetch Blogs'
  });

  return (
    <div className='home'>
      { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
      { isPending && <Loader /> }
      { error && <ErrorView error={error} errorController={errorController} /> }
    </div>
  );
}

export default Home;