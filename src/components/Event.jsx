import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Event = (props) => {
    return (
        <div className = "event">
            <img className = "img" src ={props.image} />
            <h3>{props.event}</h3>
            <h3>{props.location}</h3>
            <a href={props.web} target="_blank">
            <button>Get Tickets</button>
            </a>
        </div>
        
    )
}


export default Event;