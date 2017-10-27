import axios from 'axios';

const initialState = {
    user: {
        firstName: 'Test',
        lastName: 'Robot',
        gender: 'Female',
        hairColor: 'brown',
        eyeColor: 'brown',
        hobby: 'sleeping',
        birthdayDay: 12,
        birthdayMonth: 'July',
        birthdayYear: 1905 
    },
    users: []
}

const GET_USER_INFO = 'GET_USER_INFO';

export function getUserInfo(){
    const user = axios.get('/auth/me')
        .then( res => res.data)
    return {
        type: GET_USER_INFO,
        payload: user
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case GET_USER_INFO:
            return Object.assign({}, state, {user: action.payload})
        default:   
            return state;
    }
}