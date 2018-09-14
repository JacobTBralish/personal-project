import React, { Component } from 'react';
import { findParks, handleStateSelection } from '../../redux/reducer';
import { connect } from "react-redux";
import Campground from '../Campground/Campground';
import { Link } from 'react-router-dom'


class FindState extends Component {
    constructor(){
        super();
        this.state ={
            chosenState:'',

        }
    }

handleChange = (e) => {
    this.setState({
        chosenState: e.target.value
    })
    }
    

    componentDidMount(){
        // const { setCampsites } = this.props;
        // setParks();
        // setCampsites();
        // setAll();
        // findState();
        // findParks();
        // findCampsites();
    }
    render() { 

        let { stateRes } = this.props;
        console.log('stateRes', stateRes)
        // let displayStates = state ? state.map((campsite, index) => {
        //     return <div key={index}><Campground {...campsite} /></div>
        // }) : 'loading'
        return ( 
            <div>
                <div>FindState</div>
                <h1>RENDERED</h1>
                {/* <div>{displayStates}</div> */}

                
                <select onChange={((e) => this.handleChange(e.target.value))}>
                    <option value='AK'>AK</option>
                    <option value='AR'>AR</option>
                    <option value='AZ'>AZ</option>
                    <option value='CA'>CA</option>
                    <option value='CO'>CO</option>
                    <option value='CT'>CT</option>
                    <option value='DE'>DE</option>
                    <option value='FL'>FL</option>
                    <option value='GA'>GA</option>
                    <option value='HI'>HI</option>
                    <option value='ID'>ID</option>
                    <option value='IL'>IL</option>
                    <option value='IN'>IN</option>
                    <option value='IA'>IA</option>
                    <option value='KS'>KS</option>
                    <option value='KY'>KY</option>
                    <option value='LA'>LA</option>
                    <option value='ME'>ME</option>
                    <option value='MD'>MD</option>
                    <option value='MA'>MA</option>
                    <option value='MI'>MI</option>
                    <option value='MN'>MN</option>
                    <option value='MS'>MS</option>
                    <option value='MO'>MO</option>
                    <option value='MT'>MT</option>
                    <option value='NE'>NE</option>
                    <option value='NV'>NV</option>
                    <option value='NH'>NH</option>
                    <option value='NJ'>NJ</option>
                    <option value='NM'>NM</option>
                    <option value='NY'>NY</option>
                    <option value='NC'>NC</option>
                    <option value='ND'>ND</option>
                    <option value='OH'>OH</option>
                    <option value='OK'>OK</option>
                    <option value='OR'>OR</option>
                    <option value='PA'>PA</option>
                    <option value='RI'>RI</option>
                    <option value='SC'>SC</option>
                    <option value='SD'>SD</option>
                    <option value='TN'>TN</option>
                    <option value='TX'>TX</option>
                    <option value='VT'>VT</option>
                    <option value='VA'>VA</option>
                    <option value='WA'>WA</option>
                    <option value='WV'>WV</option>
                    <option value='WI'>WI</option>
                    <option value='WY'>WY</option>

                </select>
                <div><button onClick={() => this.props.findParks(stateRes)}><Link to='/findcampsite'>Next</Link></button></div>
 
                {/* <div><button onClick={this.props.findParks()}></button></div> */}
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
    // parks: state.parks,
    data: state.data,
    stateRes: state.stateRes
    }
}


const mapDispatchToProps = {
    findParks,
    handleStateSelection,
    // findState
    // findState,
    // setCampsites,
}

 
export default connect(mapStateToProps, mapDispatchToProps)(FindState);