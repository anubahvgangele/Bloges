import './App.css';
import { Header } from './component/header';
import { Pagination } from './component/pagination';
import { Bloges } from './component/blog';
import { useContext } from 'react';
import { AppContext } from './context/Appcontext';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import { Home } from './pages/Home';
import { BlogesPage } from './pages/BlogesPage';
import { CategoryPage } from './pages/CategoryPage';
import { TagPage } from './pages/TagPage';

function App() {
  const {fetchBlogesPosts} = useContext(AppContext);

  const [searchParams , setsearchParams] = useSearchParams();
  const location = useLocation();

  useEffect( () =>{
    const page = searchParams.get("page" || 1);

    if(location.pathname.includes("tags")){
      const tag = location.pathname.
      split("/")
      .at(-1)
      .replaceAll("-","");
      fetchBlogesPosts(Number(page), (tag));
    }

    else if (location.pathname.includes("category")){
      const category = location.pathname
        .split("/")
        .at(-1)
        .replaceAll("-", "");
        fetchBlogesPosts(Number(page), null, category);
    }
    else{
      fetchBlogesPosts(Number(page));
    }
     

  },[location.pathname, location.search]);
  return (

  <Routes>

    <Route path="/" element= {<Home/>}/>

    <Route path='/blog/:blogId' element = {<BlogesPage/>} />

    <Route path='/tags/:tag' element={<TagPage/>} />

    <Route path='/categories/:category' element={<CategoryPage/>} />

  </Routes>

)};

export default App;
