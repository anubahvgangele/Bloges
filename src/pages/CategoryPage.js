import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Pagination } from '../component/pagination';
import { Bloges } from '../component/blog';

export const CategoryPage = () => {

  const navigation = useNavigate();

  const location = useLocation(-1);

  const category = location.pathname.split("/").at(-1);

  return (

    <div>

      <header/>

      <div>
        
        <button onClick={() => navigation(-1)}>
          Back
        </button>

        <h2>Bloges on <span>#{category}</span></h2>
      </div>

      <Bloges/>

      <Pagination/>

    </div>
  )
}
