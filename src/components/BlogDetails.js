import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
import ErrorView from "./ErrorView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error, errorController } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div>
      { blog && (
        <div className="blog-details">
          <h2 className="blog-title">{blog.title}</h2>
          <div className="blog-author">
            <FontAwesomeIcon icon={faUser} className="icon" /> {blog.author}
          </div>
          <p className="blog-body">{blog.body}</p>
        </div>
      )}
      { isPending && <Loader /> }
      { error && <ErrorView error={error} errorController={errorController} /> }
    </div>
  )
}

export default BlogDetails;