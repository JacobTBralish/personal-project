import React from 'react';


function Campsite(props){
    return (
        <div>
            <div>
                {/* <img src={props.img} alt={props.name}></img> */}
            </div>
            <div>
                <p>Campground Name: {props.name}</p>
                <p>State: {props.addresses ? props.addresses[0].stateCode : 'N/A'}</p>
                <p>State park: {props.parkCode ? props.parkCode : 'N/A'}</p>
                <p>Latitude and Longitude: {props.latLong ? props.latLong : 'N/A'}</p>
                <p>{}</p>
            </div>
        </div>
    )
}

export default Campsite;
