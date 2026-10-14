import { createContext, useState } from "react";
import { baseUrl } from "../baseurl";
import { useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider({children}){

    const [loading,setLoading] = useState(false);

    const [posts,setPosts] = useState([]);

    const [page,setPage] = useState(1);

    const [totalPage,setTotalPage] = useState(null);

    

    async function fetchBlogesPosts(page = 1, tag=null , category) {

        setLoading(true);

        let url =  `${baseUrl}?page=${page}`;
        
        if(tag)
            url += `&tag=${tag}`;

        if(category)
            category  += `category = ${category}`
        
        try{

            const res = await fetch(url);
            const data = await res.json();

            if(!data.posts || data.posts.length === 0)
                console.log("Posts not found")
            
            setPosts(data.posts);

            setPage(data.page);

            setTotalPage(data.totalPages);

        }
        catch(error){
            alert("Error in fatching Data");

            setPage(1);

            setPosts([]);
            
            setTotalPage(null);
        }
        finally{

            setLoading(false);

        }
    }

   

    const values = {
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPage,
        setTotalPage,
        fetchBlogesPosts,
        changePage
    };
    function changePage(page){

        setPage(page);

        fetchBlogesPosts(page);

    }

    return(
        <AppContext.Provider value={values}>

        {children}
        
        </AppContext.Provider>

    );

}

