import { createContext, useState } from "react";
import { baseUrl } from "../baseurl";
import { useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider({children}){

    const [loading,setLoading] = useState(false);

    const [posts,setPosts] = useState([]);

    const [page,setPage] = useState(1);

    const [totalPage,setTotalPage] = useState(null);

    useEffect(() =>{
        
    })

    async function fetchBlogesPosts(page = 1) {
        setLoading(true);
      
        try{
            const url =  await fetch(`${baseUrl}?page=${page}`);

            const data = await url.json();

            console.log(data);


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

