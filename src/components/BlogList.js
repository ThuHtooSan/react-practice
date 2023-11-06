const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map(blog => 
        <div className='blog-preview' key={blog.id}>
          <h2 className='title'>{blog.title}</h2>
          <p className='author'>By {blog.author}</p>
        </div>
      )}
    </div>
  );
}

export default BlogList;