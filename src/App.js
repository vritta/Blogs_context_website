import "./App.css";
// import Header from './components/Header.js';
// import Pagination from './components/Pagination.js';
// import Blogs from './components/Blogs.js';
import Home from './Pages/Home.js';
import BlogPage from './Pages/BlogPage.js';
import TagPage from './Pages/TagPage.js';
import CategoryPage from './Pages/CategoryPage.js';
import { AppContext } from "./context/AppContext.js";
import { useContext, useEffect } from "react";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";

export default function App() {
  
  // useEffect(()=>{
  //   async function Foo(){
  //     // let data="";
  //     const data = await axios.get(baseUrl);
  //     // const data = await fetch(baseUrl);
  //       console.log(data);
  //     } Foo();},[]
  // );
  const {fetchBlogPosts} = useContext(AppContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  useEffect(()=>{
    // fetchBlogPosts()},[]
    const page = searchParams.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search]);
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
    // <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    //   <Header/>
    //   <Blogs/>
    //   <Pagination/>
      // {/* {Foo()} */}
    // </div>
  );

}