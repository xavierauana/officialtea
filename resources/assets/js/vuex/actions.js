/**
 * Created by Xavier on 15/5/2016.
 */

let types = require('./mutation-types');

const addToQueue = ({dispatch})=>{
    setTimeout(()=>{
        dispatch(types.ADD_TO_QUEUE);
        dispatch(types.RESET_PHONE);
    }, 2000)
}
const resetQueue = ({dispatch})=>dispatch(types.RESET_QUEUE);
const addDigit = ({dispatch}, digit)=>dispatch(types.ADD_PHONE_DIGIT, digit);
const removePreviousPhoneDigit = ({dispatch}, digit)=>dispatch(types.REMOVE_PREVIOUS_DIGIT);
const resetPhoneNumber = ({dispatch})=>dispatch(types.RESET_PHONE);

module.exports = {
    addToQueue,
    resetQueue,
    addDigit,
    removePreviousPhoneDigit,
    resetPhoneNumber
};