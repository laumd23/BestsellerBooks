import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../Context/GlobalState';
import Books from '../Books/Books';
import './Home.scss';

const Home = () => {
  const { getOverview, addBook} = useContext(GlobalContext);

  useEffect(() => {
    if(Object.entries(addBook).length === 0){
      getOverview();
    }
  }, []);

  return (
    <div className='home-container'>
      <div className='principal-title'>
        <h1>Top 5 de Best Sellers</h1>
      </div>
      <div className='list-all-container'>
        <Books />
      </div>
    </div>
  );
};

export default Home;
