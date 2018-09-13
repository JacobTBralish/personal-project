import React, {Component} from 'react';
import { setCampsites, setParks, setAll } from '../../redux/reducer';
import { connect } from "react-redux";
import Campground from '../Campground/Campground';
import Pagination from 'react-js-pagination';

class Campgrounds extends Component {
    constructor(props){
        super(props);
        this.state = {
            activePage: 1
        }
    }
 


    componentDidMount(){
        const { setCampsites } = this.props;
        setParks();
        setCampsites();
        setAll();
    }

    handlePageChange = (pageNumber)  => {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }


    
    render() { /* console.log(this.state.campsites) */
        // let { name, parkCode, latLog }
        let { campsites, newData } = this.props;
        
        let displayCampsite = campsites ? campsites.map((campsite, index) => {
            return <div key={index}><Campground {...campsite} /></div>
        }) : 'loading'

        // let displayNewData = newData ? newData.map((campsite, index) => {
        //     return <div key={index}><Campground {...newData} /></div>
        // }) : 'loading'


        
        return ( 
            <div>
                <div>{displayCampsite}</div>
                {/* <div>{displayNewData}</div> */}
            <div>
                <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={25}
                totalItemsCount={581}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}/>
            </div>

            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
    campsites: state.campsites,
    }
}


const mapDispatchToProps = {
    setParks,
    setCampsites,
    setAll
}


export default connect(mapStateToProps, mapDispatchToProps)(Campgrounds);