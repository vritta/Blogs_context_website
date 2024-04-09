import React from 'react'
import { NavLink } from 'react-router-dom'

const Card = ({post}) => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
        <span>{post.title}</span>
      </NavLink>
      {/* <br/> */}
      <p className='text-orange-500 font-bold text-lg'>{post.title}</p>
      <p className='text-sm mt-[4px]'>
        By <span className='italic'>{post.author}</span> on&nbsp;
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className='underline font-bold'>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
      <p className='text-md mt-[14px]'>{post.content}</p>
      <div className='flex gap-x-3'>
        {post.tags.map((tag, index)=>(
          <NavLink to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span key={index} className='text-blue-600 underline font-bold text-xs mt-[5px]'> 
              {`#${tag}`}
            </span>
          </NavLink>))
        }
      </div>
    </div>
  )
}

export default Card
