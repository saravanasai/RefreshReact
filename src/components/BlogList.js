const BlogList = ({blogpass,tittle}) => {
   
  return (
    <div className="blog-list">
        <h2>{tittle}</h2>
      {blogpass.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h3>{blog.tittle}</h3>
          <p>Author - {blog.author}</p>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
