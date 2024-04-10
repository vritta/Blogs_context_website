import React, { useContext, useEffect, useState } from 'react'
import {useNavigate, useLocation} from 'react-router-dom'
import { AppContext } from '../context/AppContext';
// import { baseUrl } from '../baseUrl';
import Header from '../components/Header';
import Spinner from '../components/Spinner';
import Card from '../components/Card';

const BlogPage = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState();
  const location = useLocation();
  const navigation = useNavigate();
  const {loading, setLoading} = useContext(AppContext)
  const blogId = location.pathname.split("/").at(-1);
  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
      setRelatedBlogs(data.relatedBlogs);
    }
    catch(err){
      console.log(err.message);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(()=>{ 
    if(blogId){
      fetchRelatedBlogs();
    }
  }, [location.pathname]);

  return (
    <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center">
      <Header/>
      <div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[-100px]'>
        <button onClick={()=>navigation(-1)} className='rounded-md border-2 px-4 py-1 bg-slate-300'>
          Back
        </button>
      </div>
      {
        loading ? <Spinner/>: 
        blog ? (<div className='w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[70px]'>
          <Card post={blog}/>
          <h2 className='font-bold'>Related Blogs</h2>
          {
            relatedBlogs.map((post)=>(
            <div key={post.id}>
              <Card post={post}/>
            </div>)
            )
          }
        </div>):
        (<div>
          <p>No Blog found</p>
        </div>)
      }
    </div>
  )
}

export default BlogPage
