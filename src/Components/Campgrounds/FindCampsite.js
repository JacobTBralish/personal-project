import React, { Component } from 'react';
import { findState, findParks, findCampsites } from '../../redux/reducer';
import { connect } from "react-redux";
import Campground from '../Campground/Campground';


class FindParks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentDidMount(){
        // const { setCampsites } = this.props;
        // setParks();
        // setCampsites();
        findParks();
        // findCampsites();
    }
    render() { 

        let { state } = this.props;
        
        let displayStates = state ? state.map((campsite, index) => {
            return <div key={index}><Campground {...campsite} /></div>
        }) : 'loading'
        return ( 
            <div>
                <div>FindParks</div>
                <div>{displayStates}</div>

            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
    parks: state.parks,
    campsites: state.campsites,
    data: state.data
    }
}


const mapDispatchToProps = {
    findParks,
    // setCampsites,
    // setAll
    findCampsites
}

 
export default connect(mapStateToProps, mapDispatchToProps)(FindParks);