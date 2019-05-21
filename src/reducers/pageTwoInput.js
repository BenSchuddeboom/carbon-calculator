import {SUBMIT_INPUT_TWO, UPDATE_INPUT} from '../actions/input'

const initialState = {
    emissionsKnown: "no",
    S1emissions: 701020, // tons CO2
    S1reductionTarget: 100, // percentage
    S2emissions: 701020, // tons CO2
    S2reductionTarget: 0, // percentage
    S3emissions: 12618360, // tons CO2
    S3reductionTarget: 100, // percentage
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
    case SUBMIT_INPUT_TWO:
        return {...state, ...action.payload}
    case UPDATE_INPUT:
        return {...state, ...action.payload}
    default:
        return state
    }
}