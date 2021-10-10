import { Link } from "react-router-dom";

const BlogList = ({blogpass,tittle}) => {
   
  return (
    <div className="blog-list">
       <h2>{tittle}</h2>
      {blogpass.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`blog/${blog.id}`}>
           <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            <p>Author - {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
