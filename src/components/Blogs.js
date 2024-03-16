import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';

const Blogs = () => {
  const {posts, loading, fetchBlogPost} = useContext(AppContext);
  console.log("hi--"+posts);
  return (
    <div>
      {loading?(<Spinner/>):(posts===0?(fetchBlogPost(1)):(posts))}
    </div>
  )
}

export default Blogs
