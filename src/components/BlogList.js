const BlogList = ({blogpass,tittle}) => {
   
  return (
    <div className="blog-list">
       <h2>{tittle}</h2>
      {blogpass.map((blog) => (
        <div className="blog-preview" key={blog.id}>
           <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>Author - {blog.author}</p>
           <button>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
