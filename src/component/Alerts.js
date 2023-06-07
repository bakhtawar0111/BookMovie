import React from 'react'

export default function Alerts(props) {
  return (
    <div style={{height:"50px"}}>
    {props.alert &&
    <div className={`alert alert-success alert-dismissible fade show`} role="alert">
        <strong>Booked:</strong>Your ticket has been booked successfully !
    </div>}
    </div>
  )
}
