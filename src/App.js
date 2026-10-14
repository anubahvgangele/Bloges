import './App.css';
import { Header } from './component/header';
import { Pagination } from './component/pagination';
import { Bloges } from './component/bloges';
import { useContext } from 'react';
import { AppContext } from './context/Appcontext';
import { useEffect } from 'react';

function App() {
  const {fetchBlogesPosts} = useContext(AppContext)

  useEffect( () =>{
    fetchBlogesPosts();
  },[])
  return (
  <div className="min-h-screen flex flex-col">

    <Header />

    <main className="flex-1 pt-12 pb-12">
      <Bloges />
    </main>

    <Pagination className='min-h-screen'/>

  </div>
)};

export default App;
