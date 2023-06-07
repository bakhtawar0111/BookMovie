import React from 'react'
import { Link } from 'react-router-dom'

export default function Movie(props) {
  return (
    <div className="card" style={{width: "18rem"}}>
  <img src={props.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.lang}<br/> Release Date: {props.Release}</p>
    <p className="card-text"><small className="text-body-secondary"></small></p>
    <Link to={`${props.id}`} className="btn btn-primary">Show more</Link>
  </div>
</div>
  )
}
