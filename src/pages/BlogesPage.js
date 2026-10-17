import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/Appcontext';
import { baseUrl } from '../baseurl';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { BlogDetails } from '../component/BlogDetails';


export const BlogesPage = () => {
  
  const newBaseUrl = "https://codehelp-apis.vercel.app/api"

  const navigation = useNavigate();

  const location = useLocation();

  const pathname = location.pathname;

  const category = location.pathname.split("/").at(-1);

  const [bloges,setBloges] = useState(null);
  
  const [relatedBloges,setRelatedBloges] = useState([]);

  const {loading,setLoading} = useContext(AppContext);

  const blogId  = location.pathname.split("/").at(-1);

  async function fetchRelatedBloges(){
    setLoading(true);
    
    let url = `${newBaseUrl}/get-blog?blogId=${blogId}`;
    
    try{
      const res = await fetch(url);
      console.log("status",res.status);


      const data = await res.json();
      console.log(data);

      setBloges(data.blog);

      setRelatedBloges(data.relatedBlogs);
    }

    catch(error){
        console.log("Error agya");

        setBloges(null);

        setRelatedBloges([]);
    }

    setLoading(false);

  }
  useEffect(() =>{
    if(blogId){

      fetchRelatedBloges();

    }

  },[location,pathname])

  return (

    <div>

    <header/>

      <div>
        <button onClick={ () => navigation(-1)}>
          Back
        </button>
      </div>

      {
        loading ? 
        (<div>
          <p>Loading</p>
        </div>) : 
        bloges ? 

        (
          <div>

            <BlogDetails post={bloges}/>
          
            <h2>Realted Bloges</h2>

            {
              relatedBloges.map( (post) =>(

                <div key={post.id}> 
                    
                    <BlogDetails post={post} />

                </div>
              ) )
            }

          </div>
        ) :
        (<div>

          <p> No-blog found</p>

        </div>) 
      }
      

    </div>
  )
}
