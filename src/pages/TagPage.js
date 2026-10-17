import React from 'react'
import { Header } from '../component/header'
import { useLocation, useNavigate } from 'react-router-dom'
import { Bloges } from '../component/blog';
import { Pagination } from '../component/pagination';

export const TagPage = () => {

  const navigation = useNavigate(-1);

  const location = useLocation();

  const tag = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>
      
      <div>

        <button onClick={() => navigation(-1)}>

          Back
        </button>
        <h2> Bloges Tagged <span>#{tag}</span></h2>
      </div>

      <Bloges/>

      <Pagination/>
      
    </div>
  )
}
