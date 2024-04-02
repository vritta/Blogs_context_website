import "./App.css";
import Header from './components/Header.js';
import Pagination from './components/Pagination.js';
import Blogs from './components/Blogs.js';
import { AppContext } from "./context/AppContext.js";
import { useContext, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

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
  useEffect(()=>{fetchBlogPosts()},[]);
  return (
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
    // <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
    //   <Header/>
    //   <Blogs/>
    //   <Pagination/>
    //   {/* {Foo()} */}
    // </div>
  );

}