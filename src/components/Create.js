import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {
    const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [isPending, setisPending] = useState(false);
 
  const history=useHistory();

  const handleSubmit=(e)=>{
      e.preventDefault();
       
     
      setisPending(true);
      setTimeout(function(){
        const BlogData={title,body,author};
      fetch('http://localhost:8000/Blogs',{
          method:"POST",
          headers:{"content-Type":"application/json"},
          body:JSON.stringify(BlogData)
      }).then((res)=>{
            if(!res.ok)
            {
               console.log("somethings went wrong");
            }
            else
            {
                setisPending(false);
                history.push('/');
            }
      })

    }, 2000); 
      
  }

    return ( 
        <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
       {!isPending && <button>Add Blog</button>} 
       {isPending && <button>Posting .....</button>} 
       
      </form>
    </div>
     );
}
 
export default Create;