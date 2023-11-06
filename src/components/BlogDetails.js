import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
import ErrorView from "./ErrorView";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error, errorController } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div className="blog-details">
      { blog && <h2>Blog details - {id}</h2> }

      { isPending && <Loader /> }
      { error && <ErrorView error={error} errorController={errorController} /> }
    </div>
  )
}

export default BlogDetails;