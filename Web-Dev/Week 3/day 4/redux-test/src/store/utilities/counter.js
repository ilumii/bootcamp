//Action items

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export const increment = (amount) =>{
    return{
        type: INCREMENT,
        payload: amount
    }
}

export const decrement = (amount) =>{
    return{
        type: DECREMENT,
        payload: amount
    }
}

export default (state = 0, action) =>{  
    switch(action.type){
        case INCREMENT:
            return state+action.payload;
        case DECREMENT:
            return state-action.payload;
        default:
            return state;
    }
}