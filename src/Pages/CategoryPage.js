import React from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import Header from '../components/Header'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';

const CategoryPage = () => {
  const navigation = useNavigate();
  const location = useLocation();
  const Category = location.pathname.split("/").at(-1);
  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[-100px]'>
        <button onClick={()=>navigation(-1)} className='rounded-md border-2 px-4 py-1 bg-slate-300'>
          Back
        </button>
        <h2 className='font-bold'>
          Blogs on <span>#{Category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
