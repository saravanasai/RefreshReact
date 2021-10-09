
import useFetch from "../hooks/useFetch";
import BlogList from "./BlogList";


const Home = () => {
  const {data:blogs,is_pending,error}=useFetch('http://localhost:8000/Blogs');
  return (
    <div className="home">
      {is_pending && <div>Loading</div>}
      {error && <div>{error}</div>}
      {blogs && <BlogList blogpass={blogs} tittle="All Blogs"/>}
    </div>
  );
};

export default Home;
