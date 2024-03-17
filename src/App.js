import "./App.css";
import Header from './components/Header.js';
import Pagination from './components/Pagination.js';
import Blogs from './components/Blogs.js';
import { AppContext } from "./context/AppContext.js";
import { useContext, useEffect } from "react";

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
  useEffect(()=>{fetchBlogPosts();},[]
  );
  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
      {/* {Foo()} */}
    </div>
  );

}
