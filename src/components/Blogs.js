import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import Card from './Card';

const Blogs = () => {
  const {posts, loading} = useContext(AppContext);
  // console.log("hi--"+ posts);
  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]'>
      {loading ? (
        <div className='h-[70vh] w-full flex flex-col justify-center items-center'>
          <Spinner/>
          <div className='mt-28 ml-5 font-bold text-2xl'>Loading...</div>
        </div>):
        (posts.length === 0 ?
          (<div>
            No data Available
            {/* <button onClick={()=>fetchBlogPost(1)}>kokoko</button> */}
          </div>) : 
          (posts.map((post)=>( <Card post = {post}  key={post.id}/> ))
          )
        )
      }
    </div>
  )
}

export default Blogs
