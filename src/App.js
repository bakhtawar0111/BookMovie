import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import './App.css';
import { useState,useEffect } from 'react';
import Branding from './component/Branding';
import Firtsscreen from './component/Firtsscreen';
import Moviedetails from './component/Moviedetails';

function App() {
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all").then((response) => {
      response.json().then((result) => {
        setdata(result);
      });
    });
  }, []);
  return (
    <> 
    <Router>
    <Branding/>
    <Routes>
      <Route path="/" element={<Firtsscreen/>}/>
    { data.map((finaldata)=>{
      return(
      <Route key={finaldata.show.id} path={`${finaldata.show.id}`} element={<Moviedetails rate={finaldata.show.rating.average} genres={finaldata.show.genres} name={finaldata.show.name} image={finaldata.show.image.original} summary={finaldata.show.summary}/>}/>
      )
    })
    }
    </Routes>
    </Router>
    </>
  );
}

export default App;
