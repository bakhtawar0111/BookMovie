import { useNavigate } from "react-router-dom";
import React, { useState }  from "react";
import Alerts from "./Alerts";

export default function Form(props) {
    const nevigate=useNavigate();
    const handleClose=()=>{
        nevigate(0);
    }
    const [Name,setName]=useState();
    const handleNameOnchange=(event)=>{
        setName(event.target.value)
    }
    const [Mobile,setMobile]=useState();
    const handleMobileOnchange=(event)=>{
        setMobile(event.target.value)
    }
    const [alert,setalert]=useState(false)
    const [No,setNo]=useState();
    const handleNoOnchange=(event)=>{
        setNo(event.target.value)
    }
    const handlebook=(event)=>{
        const User={
            Movie_Name:props.Mname,
            Mobile:Mobile,
            No_of_tickets:No
        }
        localStorage.setItem(Name,JSON.stringify(User));
        console.log("Clicked")
        setalert(true)
        setTimeout(() => {
            setalert(false)
            nevigate(0);
        }, 5000);
        event.preventDefault();
    }
  return (
    <>
    <div className="position-absolute" style={{top:"0%",left:"0%",height:"100%",width:"100%"}}>
      <Alerts alert={alert}/>
        <form className="container my-5 border border-danger bg-secondary p-5">
        <button className="btn-close" aria-label="Close" onClick={handleClose}></button>
          <div className="form-row">
            <div className="form-group">
              <label className="form-check-label">
                <h2>{props.Mname}</h2>
              </label>
            </div>
            <div className="form-group col-md-6">
              <label>Name</label>
              <input value={Name} className="form-control" onChange={handleNameOnchange}  />
            </div>
            <div className="form-group col-md-6">
              <label>Mobile No.</label>
              <input value={Mobile} className="form-control" onChange={handleMobileOnchange} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>No. of tickets</label>
              <input value={No} className="form-control" onChange={handleNoOnchange} />
            </div>
          </div>
          <button className="btn btn-primary" onClick={handlebook}>
            Book
          </button>
        </form>
      </div>
    </>
  );
}
