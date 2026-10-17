import React from 'react'
import { Bloges } from '../component/blog'
import { Pagination } from '../component/pagination'
import { Header } from '../component/header'

export const Home = () => {
  return (
    <div>
        <Header/>
        <div>

            <Bloges/>

            <Pagination/>

        </div>
        
    </div>
  )
}
