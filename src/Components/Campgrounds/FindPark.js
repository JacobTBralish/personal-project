import React, { Component } from 'react';
import { findState, findParks, findCampsites } from '../../redux/reducer';
import { connect } from "react-redux";
import Parks from '../Campgrounds/Parks';

class FindPark extends Component {
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

        let { parks, states } = this.props;
        
        // let displayParks = states ? states.map((state, index) =>{
        //     return <div key={index}><Parks{...} /></div> })

        let displayParks =states.map((state, index) =>{
            return <div key={index}><Parks{...states} /></div> })

        // let displayStates = state ? state.map((state, index) => {
        //     for (let i = 0 ; i < state.length ; i++) {
        //         if (state.i === state.states){
        //             return <div>{parks.push(...state.i)}</div>
        //         }
        //     }
        //    })   // return <div key={index}><Campground {...parks} /></div>
        // : 'loading'
    
        return ( 
            <div>
                <div>Find Park</div>
                {/* <div>{...displayParks}</div> */}


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
    // findState,
    // setCampsites,
    // setAll
    // findCampsites
}

 
export default connect(mapStateToProps, mapDispatchToProps)(FindPark);