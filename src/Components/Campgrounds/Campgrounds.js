import React, {Component} from 'react';
import { findState, findParks, findCampsites } from '../../redux/reducer';
import { connect } from "react-redux";
import Campground from '../Campground/Campground';
// import Pagination from 'react-js-pagination';

class Campgrounds extends Component {
    constructor(props){
        super(props);
        this.state = {
            // activePage: 1
        }
    }
 


    componentDidMount(){
        const { setCampsites } = this.props;
        // setParks();
        // setCampsites();
        // setAll();
        findState();
        // findParks();
        // findCampsites();
    }

    handlePageChange = (pageNumber)  => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }


    
    render() { /* console.log(this.state.campsites) */
        // let { name, parkCode, latLog }
        let { campsites, data, state } = this.props;
        
        let displayStates = state ? state.map((campsite, index) => {
            return <div key={index}><Campground {...campsite} /></div>
        }) : 'loading'

        // let displayNewData = newData ? newData.map((campsite, index) => {
        //     return <div key={index}><Campground {...newData} /></div>
        // }) : 'loading'


        
        return ( 
            <div>
                
                <div>{displayStates}</div>
                {/* <div>{displayNewData}</div>
            <div>
                <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={21}
                totalItemsCount={581}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}/>
            </div> */}

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
    findState,
    // setCampsites,
    // setAll
    findCampsites
}


export default connect(mapStateToProps, mapDispatchToProps)(Campgrounds);