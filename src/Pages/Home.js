import React from 'react'
import Header from '../components/Header.js';
import Pagination from '../components/Pagination.js';
import Blogs from '../components/Blogs.js';
const Home = () => {
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default Home
