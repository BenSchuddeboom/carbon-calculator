import {SUBMIT_INPUT_ONE} from '../actions/submitInput'

const initialState = null;

export default (state = initialState, action = {}) => {
    switch(action.type) {
    case SUBMIT_INPUT_ONE:
        return action.payload
    default:
        return state
    }
}