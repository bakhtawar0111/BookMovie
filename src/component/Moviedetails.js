import React, { useState } from "react";
import parse from "html-react-parser";
import Form from "./Form";

export default function Moviedetails(props) {
  const [IsOpen,setIsOpen]=useState()
  const callform=()=>{
    setIsOpen(true);
  }
  return (
    <>
    <div className="container border border-secondary rounded-1 my-3 bg-secondary">
      <div className="row my-3 ">
        <div className="col-lg-5">
          <div className="card" style={{ width: "20rem" }}>
            <img src={props.image} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col-lg-6 ">
          <div className="card-body text-white">
            <h1 className="card-text text-center">{props.name}</h1>
            <p className="card-text">
              Genres: {props.genres[0]} {props.genres[1]}
              <br />
              Rating: {props.rate ? props.rate : "NA"}
            </p>
            {parse(`${props.summary}`)}
            <div className="btn btn-primary" onClick={callform}>Book Ticket</div>
          </div>
        </div>
      </div>
    </div>
       {IsOpen&&<div >
       <Form Mname={props.name}/>
       </div>}
    </>
  );
}
