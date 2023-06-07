import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";

 const Firtsscreen =()=>{
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      response.json().then((result) => {
        setdata(result);
      });
    });
  }, []);

  return (
    <div className="row">
        {data.map((element)=>{
            return(
                <div key={element.show.id} className="col-lg-4 col-md-6 my-2 d-flex justify-content-around">
                <Movie id={element.show.id} name={element.show.name} image={element.show.image.medium} lang={element.show.language} Release={element.show.premiered}/>
                </div>
            )
        })}
    </div>

  );
}
export default Firtsscreen;