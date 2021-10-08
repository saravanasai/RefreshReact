import { useState } from "react";
import BlogList from "./BlogList";


const Home = () => {

  const [blogs,setBlogs]=useState([
    {tittle:"React Tuts",author:"sai",id:"1"},
    {tittle:"React Tuts 1",author:"saravana",id:"2"},
    {tittle:"React Tuts 2",author:"Bond",id:"3"},
  ]);

  return (
    <div className="home">
      <BlogList blogpass={blogs} tittle="All Blogs" />
      <BlogList blogpass={blogs.filter((blog)=>blog.author==="sai")} tittle="sai" />
    </div>
  );
};

export default Home;
