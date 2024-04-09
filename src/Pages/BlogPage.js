import React, { useContext, useState } from 'react'
import {useNavigation, useLocation} from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';

const BlogPage = () => {
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState();
  const location = useLocation();
  const navigation = useNavigation();
  const {loading, setLoading} = useContext(AppContext)
  const blogId = location.pathname.split("/").at(-1);
  async function fetchRelatedBlogs(){
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`;
    try{
      const res = await fetch(url);
      const data = await res.json();
      setBlog(data.blog);
    }
    catch(err){
      console.log(err);
    }
  }
  return (
    <div>
      
    </div>
  )
}

export default BlogPage
