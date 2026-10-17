import React, { useContext } from 'react'
import { AppContext } from '../context/Appcontext'
import { Spiner } from './spiner';
import { BlogDetails } from './BlogDetails';

export const Bloges = () => {

  const {posts,loading} = useContext(AppContext);

  return (
    <div className=' flex flex-col gap-y-5 mx-auto w-[56.8%] mt-5'>

      {loading ? (<Spiner/>) : (
        posts.length===0  ? <p>No post found</p> : posts.map( (post) => (

          <BlogDetails key={post.id} post={post}  />

        )) 
      ) }

    </div>
  )
}
