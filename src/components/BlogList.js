import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(blog => 
        <Link to={`blogs/${blog.id}`} key={blog.id}>
          <div className='blog-preview'>
            <h2 className='title'>{blog.title}</h2>
            <p className='author'>By {blog.author}</p>
          </div>
        </Link>
      )}
    </div>
  );
}

export default BlogList;