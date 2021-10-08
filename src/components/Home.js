import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {

  const [blogs,setBlogs]=useState([
    {tittle:"React Tuts",author:"sai",id:"1"},
    {tittle:"React Tuts 1",author:"saravana",id:"2"},
    {tittle:"React Tuts 2",author:"Bond",id:"3"},
  ]);
  
  const handleDelete=(id)=>{

     const newBlog=blogs.filter(blog=>blog.id!==id);
     setBlogs(newBlog);

  }

  return (
    <div className="home">
      <BlogList blogpass={blogs} tittle="All Blogs" handleDelete={handleDelete}/>
    </div>
  );
};

export default Home;
