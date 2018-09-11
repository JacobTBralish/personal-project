import React from 'react';


function Campsite(props){
    return (
        <div>
            <div>
                {/* <img src={props.img} alt={props.name}></img> */}
            </div>
            <div>
                <p>Campground Name: {props.name}</p>
                <p>State: {props.states}</p>
                {/* <p>{props.parkCode}</p> */}
                {/* <p>{props.}</p> */}
                <p>{}</p>
            </div>
        </div>
    )
}

export default Campsite;
