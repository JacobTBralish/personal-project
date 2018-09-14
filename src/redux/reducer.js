import axios from 'axios';
// import URL from '../api';
// import { fastest } from 'sw-toolbox';
// import mergeByKey from 'array-merge-by-key';
// const arrayMergeByKey = require('array-merge-by-key');

const initialState = {
    user: {
        username: '',
        password:'',
        firstName:'',
        lastName:'',
        profilePic:'',
        email:'',
        DOB:''
    },
    data: [],
    states: [],
    stateRes:[],
    parks: [],
    park:'',
    campsites: [],
    updatedState: null
}

const LOGGED_IN = 'LOGGED_IN';
const REGISTER = 'REGISTER';
const LOGGED_OUT = 'LOGGED_OUT';
const SET_POSTS = 'SET_POSTS';
const SET_CAMPSITES = 'SET_CAMPSITES';
const SET_PARKS = 'SET_PARKS';
const SET_ALL = 'SET_ALL';
// const FIND_STATE = 'FIND_STATE';
const FIND_PARKS = 'FIND_PARKS';
const FIND_CAMPSITE = 'FIND_CAMPSITE';
const STATE_SELECTION = 'STATE_SELECTION';

export default function reducer( state = initialState, action){
    
    switch(action.type){
        case LOGGED_IN + '_FULFILLED':
            return {/* ...state, user: action.payload.username, user: action.payload.password */}
        case LOGGED_OUT + '_FULFILLED':
            return {...state, user: null}
        case SET_POSTS + '_FULFILLED':
            return {...state, posts: action.payload}
        case SET_CAMPSITES + '_FULFILLED':
            
            return {...state, campsites: action.payload}
        case SET_PARKS + '_FULFILLED':
            return {...state, parks: action.payload}
        case SET_ALL + '_FULFILLED':
            console.log(action)
            return {...state, data: action.payload}
        // case FIND_STATE + '_FULFILLED':
        //     return {...state, stateResponse: action.payload}
        case FIND_PARKS + '_FULFILLED':
            return {...state, updatedState: action.payload}
        case FIND_CAMPSITE + '_FULFILLED':
            return {...state, stateResponse: action.payload}
        case STATE_SELECTION + '_FULFILLED':
            return {...state, state: action.payload}
        default:
        return state
        
    }
}

export function logIn(obj, history){
    return{
        type: LOGGED_IN,
        payload: axios.post('/login', obj).then(response => {
            history.push('/');
            return response.data;
        })
    }
}

export function register(obj, history){
    return{
        type: REGISTER,
        payload: axios.post('/register', obj).then(response => {
            history.push('/');
            return response.data;
        })
    }
}

export function logOut(){
    return{
        type: LOGGED_OUT
    }
}

export function setPosts(posts){
    return{
        type: SET_POSTS,
        payload: posts
    }
}

// export function setCampsites(test){
//     const campsites = axios.get(URL.campgrounds).then(response => response.data.data)
//     console.log(test)
//     return{
//         type: SET_CAMPSITES,
//         payload: campsites
//     }
// }

// export function setCampsites(){ 
//     return{
//         type: SET_CAMPSITES,
//         payload: axios.get(URL.campgrounds).then(response => response.data.data)
//     }
// }
// export function setParks(){
//     return{
//         type: SET_PARKS,
//         payload: axios.get(URL.parks).then(response => response.data.data)
//     }
// }

// export function findState(){
//     let state = axios.get("https://api.nps.gov/api/v1/parks?limit=20&start=21&fields=&api_key=psv6nTyqb2edegMQfeIeAK92ZRlC45pmHnvEqUAH")
//     return{
//         type: FIND_STATE,
//         payload: state
//     }
// }

export function handleStateSelection(stateRes){
    console.log(stateRes)
    return{
        type: STATE_SELECTION,
        payload: stateRes
    }
}



export function findParks(stateRes){
    console.log(stateRes)
    const updatedState = axios.get(`https://api.nps.gov/api/v1/parks?stateCode=${stateRes}&limit=350&start=1&fields=images&api_key=psv6nTyqb2edegMQfeIeAK92ZRlC45pmHnvEqUAH`).then(res => {
        return console.log(res)
    })

    return{
        type: FIND_PARKS,
        payload: updatedState
    }
}



// export function findCampsites(){
    // return{
    //     type: FIND_CAMPSITE,
    //     payload: axios.get(`"https://api.nps.gov/api/v1/campgrounds?parkCode=${parkCode}&stateCode=${stateRes}&limit=1&start=1&api_key=psv6nTyqb2edegMQfeIeAK92ZRlC45pmHnvEqUAH"`)
    // }
// }

// export function setParks(test){
//     const campsites = axios.get(URL.campgrounds).then(response => response.data.data)
//     console.log(test)
//     return{
//         type: SET_CAMPSITES,
//         payload: campsites
//     }
// }
// export function setAll(){
//     const options = {
//         headers: {
//             'Content-Type': 'application/json',
//             'Access-Control-Allow-Origin': '*'
//         }
//     }
//     axios.all([setCampsites().payload, setParks().payload], options).then(axios.spread(
//         (campsites, parks)=> {
//             console.log(campsites)

//             const newData = [];
//        mergeByKey('parkCode',campsites,parks).map((campsite, index, array) => {
//            if(campsite.campsites){
//               newData.push(campsite)
//            }
//        })
//     // parks.map((park, index, parkArray) => {
//         //     campsites.map((campsite) => {
//         //         if(campsite.parkCode === park.parkCode){
//         //              parkArray[index].campsites = campsite.campsites
//         //         }
//         //     })
//         // })
//         console.log( newData)
//         return{
//             type: SET_ALL,
//             payload: newData
//         }
//     }))


    
    
    
// }

        // parks.find()
        // campsites.forEach((itm, i) => {
        //     newData.push(Object.assign({}, itm, parks[i]));
        //   });




// let data = [];
// parks.forEach((item,i) => {
//     parks.find((e) => {
//       if (e.parkCode === e.parkCode){
//         return data.push(Object.assign({}, item, campsites[i]))
//       }
//     })
//   })
// console.log(data)
