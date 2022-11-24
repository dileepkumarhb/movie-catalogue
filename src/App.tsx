import { FC } from "react";
import React, { useState } from "react";
import "./styles.css";

import Header from "./components/atoms/Header";
import MovieCatalogue from "./components/organisms/MovieCatalogue";
import data from "../static/movie-data.json";

const App: FC<{}> = () => {
  const [toggle, setToggle] = useState(data);
  const [visible, setVisible] = useState(true);
  return (
    <div className="App">
      {data &&
        Object.keys(data).map((key, index) => {
         return (
          <div className="text">
      <div onClick={() => { setToggle(data[key].title);setVisible(false);  }}
         >{data[key].title}</div>
           </div>
            )
        })}

       <div>
       {data && Object.keys(data).map((key,index) => (
             <>
             <div className="main">
               <div className="img">
    {visible && data[key].title == toggle[0].title ? (
         <>
         <img src={data[key].poster} key={data[key].title} className="photo d-block w-100" /> 
          
          <p>{data[key].director}</p>
            <p>{data[key].year}</p>
              <p>{data[key].casts}</p>
                <p>{data[key].genre}</p>
                </>
       ) : null}
  {toggle === data[key].title ? (
    <>
    <img src={data[key].poster} key={data[key].title} className="photo d-block w-100" /> 
    <p>{data[key].director}</p>
            <p>{data[key].year}</p>
              <p>{data[key].casts}</p>
                <p>{data[key].genre}</p>
    </>
  ) : null}
               </div>
             </div>
           </>
       ))}
       </div>
      {console.log(toggle[0].title)}
      <Header />
      {/* <MovieCatalogue movieListData={data} /> */}
    </div>
  );
};

export default App;
