import { useHistory, useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const BlogDetail = () => {

    const histroy=useHistory();
    const {id}=useParams();

    const {data:blog,is_pending,error}=useFetch('http://localhost:8000/Blogs/'+id);
     
    const handleDelete=()=>{
        fetch('http://localhost:8000/Blogs/'+blog.id,{
            method:"DELETE"
        }).then(()=>{
            histroy.push('/');
        })
    }

    return ( 
        <div className="blog-detail">
            {is_pending && <div>Loading....</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>{blog.body}</p>
                    <p>Author-{blog.author}</p>
                    <button onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetail;