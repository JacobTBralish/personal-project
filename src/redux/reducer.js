import axios from 'axios';
import URL from '../api';
// import _ from 'lodash';

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
    campsites: [],
    posts: [],
}

const LOGGED_IN = 'LOGGED_IN';
const LOGGED_OUT = 'LOGGED_OUT';
const SET_POSTS = 'SET_POSTS';
const SET_CAMPSITES = 'SET_CAMPSITES';
// const SET_PARKS = 'SET_PARKS';

export default function reducer( state = initialState, action){
    
    switch(action.type){
        case LOGGED_IN + '_FULFILLED':
            return {...state, user: action.payload}
        case LOGGED_OUT + '_FULFILLED':
            return {...state, user: null}
        case SET_POSTS + '_FULFILLED':
            return {...state, posts: action.payload}
        case SET_CAMPSITES + '_FULFILLED':
            console.log(action.payload)
            return {...state, campsites: action.payload}
        // case SET_PARKS:
        //     return {...state, parks: action.payload}

        default:
        return state
        
    }
}

export function logIn(user){
    return{
        type: LOGGED_IN,
        payload: user
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

export function setCampsites(test){
    const campsites = axios.get(URL.campgrounds).then(response => response.data.data)
    console.log(test)
    return{
        type: SET_CAMPSITES,
        payload: campsites
    }
}

// export function setParks(test){
//     const campsites = axios.get(URL.campgrounds).then(response => response.data.data)
//     console.log(test)
//     return{
//         type: SET_CAMPSITES,
//         payload: campsites
//     }
// }


