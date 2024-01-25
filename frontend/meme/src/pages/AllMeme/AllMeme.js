import React, { useEffect, useState } from 'react'
import MemeCard from '../../components/MemeCard/MemeCard.js'
import style from './AllMemes.module.css'
// import filter from "axios";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../layouts/NavBar/NavBar.js';
// import magnifire from '../../assets/icons/magnifire.jpeg'

const Memes = () => {
  const [memes, setMemes] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () =>{
      try{
        const response = await axios.get(`${process.env.REACT_APP_PATH}/meme`)
    
        setMemes(response.data);
        setIsLoading(false);
      }catch(error){
        console.error('error fetching the data:', error);
      }
    };
    fetchData();
  }, [])

  const handleSearchInputChange = (event) =>{
    setSearchInput(event.target.value);
  }

  return (
    <>
    <div>
      <Navbar/>
      <h1 className={style.titleh1}>Memes Collection</h1>
      <form className={style.memeSearch}>
        <input
          id="search"
          className={style.inputSearch}
          type="text"
          placeholder="Search For Memes"
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button type="button" className={style.searchButton}>
          <img src={""} alt="search img" width="25" height="20" />
        </button>
      </form>
      </div>
    <div className={style.mainCards}>
  {isLoading ? (
    <div className={style.loaderContainer}>
       <div className={style.loader}></div>
       <div className={style.loaderText}>Loading...</div>
    </div>
  ) : (
    memes && Array.isArray(memes) ? (
      memes.map((meme) => (
        <Link to={``} key={meme.id}>
          <MemeCard key={meme.id} meme={meme} />
        </Link>
      ))
    ) : (
      <div>No memes found</div>
    )
  )}
</div>

    </>
  )
}

export default Memes;
