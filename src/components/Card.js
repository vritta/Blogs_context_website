import React from 'react'

const Card = ({post}) => {
  return (
    <div>
      {/* <br/> */}
      <p className='text-orange-500 font-bold text-lg'>{post.title}</p>
      <p className='text-sm mt-[4px]'>
        By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category}</span>
      </p>
      <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
      <p className='text-md mt-[14px]'>{post.content}</p>
      <div className='flex gap-x-3'>
        {post.tags.map((tag,index)=>(
          <span key={index} className='text-blue-600 underline font-bold text-xs mt-[5px]'> #{tag} </span>))
        }
      </div>
    </div>
  )
}

export default Card
