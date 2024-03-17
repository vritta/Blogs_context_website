import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
// import Card from './Card';

const Blogs = () => {
  const {posts, loading} = useContext(AppContext);
  // console.log("hi--"+ posts);
  return (
    <div>
      {loading?(<Spinner/>):
      (posts.length === 0 ?
      (<div>
        No data Available
        {/* <button onClick={()=>fetchBlogPost(1)}>kokoko</button> */}
      </div>) : 
      (posts.map((post)=>(
        <div key={post.id}>
        <br/>
          <p>{post.title}</p>
          <p>
            By <span>{post.author}</span> on <span>{post.category}</span>
            <p>Posted on {post.date}</p>
            <p>{post.content}</p>
            <div>
              {post.tags.map((tag,index)=>(<span key={index}> #{tag} </span>))}
            </div>
          </p>
        </div>
        ))
      )
      )
      }
    </div>
  )
}

export default Blogs
