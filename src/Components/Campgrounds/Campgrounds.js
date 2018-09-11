import React, {Component} from 'react';
import axios from 'axios';
import { setCampsites, setParks, setAll } from '../../redux/reducer';
import { connect } from "react-redux";
import Campground from '../Campground/Campground'

class Campgrounds extends Component {
    constructor(){
        super();
        this.state = {
            campsites: [],
            parks: []
        }
    }


    componentDidMount(){
        const { setCampsites, setParks} = this.props;
        setCampsites();
        setParks();
        setAll()
    }


    

    campgroundCall = () => {
        axios.get("https://developer.nps.gov/api/v1/campgrounds?acad&api_key=psv6nTyqb2edegMQfeIeAK92ZRlC45pmHnvEqUAH").then((res)=> {
        // console.log(res.data)
        this.setState({ campsites: res.data.data })
        })
    }

    parksCall = () => {
        axios.get("https://developer.nps.gov/api/v1/parks?acad&api_key=psv6nTyqb2edegMQfeIeAK92ZRlC45pmHnvEqUAH").then((res)=> {
        console.log(res.data.data)
        this.setState({ parks: res.data.data })
        })
    }

    
    render() { /* console.log(this.state.campsites) */
        // let { name, parkCode, latLog }
        let { campsites, parks } = this.props;
        let displayCamps = campsites.map((campsite, index) => {
            return <div key={index}><Campground {...campsite} /></div>
        })

        let displayParkInfo = parks.map((park, index) => {
            return <div key={index}><Campground {...park} /></div>
        })
        
        return ( 
            <div>
                <div>{displayCamps}</div>
                <div>{displayParkInfo}</div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
    campsites: state.campsites,
    parks: state.parks
    }
}


const mapDispatchToProps = {
    setCampsites,
    setParks,
    setAll
}


export default connect(mapDispatchToProps, mapStateToProps)(Campgrounds);