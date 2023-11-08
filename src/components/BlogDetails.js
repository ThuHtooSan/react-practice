import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loader from "./Loader";
import ErrorView from "./ErrorView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import parse from 'html-react-parser';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: blog, isPending, error, errorController } = useFetch({
    url: `http://localhost:8000/blogs/${id}`,
    errorMessage: 'This Blog Does Not Exist!'
  });

  const splitParagraphs = (string) => {
    return string.replace(/(^.)|((?:\n)+(?=\w))|$/g, (m, g1, g2) => {
      return g1
        ? `<p>${g1}`
        : g2
          ? '</p><p>'
          : '</p>'
    });
  }

  const handleDelete = async () => {
    const jsonServer = process.env.NODE_ENV === 'production'
      ? 'https://my-json-server.typicode.com/thuhtoosan/react-practice'
      : 'http://localhost:8000';

    const res = await fetch(`${jsonServer}/blogs/${blog.id}`, {
      method: 'DELETE'
    });
    if (res.ok) navigate('/');
  }

  return (
    <div>
      { blog && (
        <div className="blog-details">
          <h2 className="blog-title">{blog.title}</h2>
          <div className="blog-author">
            <FontAwesomeIcon icon={faUser} className="icon" /> {blog.author}
          </div>
          <div className="blog-body">{ parse(splitParagraphs(blog.body)) }</div>
          <button onClick={handleDelete} className="delete">
            Delete
            <FontAwesomeIcon icon={faTrashCan} className="icon" />
          </button>
        </div>
      )}
      { isPending && <Loader /> }
      { error && <ErrorView error={error} errorController={errorController} /> }
    </div>
  )
}

export default BlogDetails;