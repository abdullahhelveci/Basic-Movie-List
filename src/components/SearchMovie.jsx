import { useState,useEffect } from "react";
const SearchMovie = () => {

  const[typing,setTyping] = useState('')
  const[movieData,setMovieData] = useState([])

  useEffect(() => {
    getMovies()
  },[typing])

  const getMovies = async () => {
    const response = await fetch('https://swapi.dev/api/films')
    const data = await response.json()
    const getData = data.results.filter(item => item.title.toLowerCase().includes(typing.toLowerCase())).map(i => {
      console.log(i)
      return{
        id: i.episode_id,
        title: i.title,
        img: './filmafis.jpg'
      }
    })
    setMovieData(getData)
  }


  const typingStart = (e) => {

    setTyping(e.target.value)

  }

  return (
    <>
      <div className="searchBar">
        <div className="mainSearchBar">
          <h2>Search Movie</h2>
          <input onChange={typingStart} type="text" placeholder="Search.." />
          <br />
          
        </div>
      </div>
      <div className="mainMovie">
        <div className="mainBox">
         
         {movieData.map(item => {
          return(
            <div className="box">
            <img className="afis" width={200} src={item.img}/>
            <div className="movieInfo">{item.title}</div>
          </div>
          )
         })}

        </div>
      </div>
    </>
  );
};
export default SearchMovie;
