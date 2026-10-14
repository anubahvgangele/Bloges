import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
import { Spiner } from './spiner';

export const Bloges = () => {

  const {posts,loading} = useContext(AppContext);

  return (
    <div className=' flex flex-col gap-y-5 mx-auto w-[56.8%] mt-5'>

      {loading ? (<Spiner/>) : (
        posts.length===0  ? <p>No post found</p> : posts.map( (post) => (
          <div key={post.id}>
            <p className=' text-[20px] font-bold'>{post.title}</p>
            <p>
              By <span className='text-sm font-medium text-gray-600 text-right'>{post.author}</span> on <span className=' font-semibold underline '>{post.category}</span>
            </p>
            <p>
              Posted On {post.date}
            </p>
            <p className='[word-spacing:0.2em] mt-3'>{post.content}</p>
            <div className=' flex flex-row gap-2'>
              {post.tags.map( (tag,index) => {
                return <span key={index} className=' text-blue-700 cursor-pointer '>#{`${tag}` }</span>
              })}
            </div>
          </div>
        )) 
      ) }

    </div>
  )
}
