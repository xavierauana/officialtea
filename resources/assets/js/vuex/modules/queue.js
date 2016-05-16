/**
 * Created by Xavier on 15/5/2016.
 */

let {
    ADD_TO_QUEUE,
    RESET_QUEUE,
    ADD_PHONE_DIGIT,
    REMOVE_PREVIOUS_DIGIT,
    RESET_PHONE
} = require("./../mutation-types");

const state = {
    queue: [],
    phoneNumber: ""
};

const mutations = {
    [ADD_TO_QUEUE](state) {
        state.queue.push({phoneNumber:state.phoneNumber})
    },
    [RESET_QUEUE](state) {
        state.queue=[]
    },
    [ADD_PHONE_DIGIT](state, digit) {
        state.phoneNumber += digit;
    },
    [REMOVE_PREVIOUS_DIGIT](state) {
        if(state.phoneNumber.length > 0)
            state.phoneNumber = state.phoneNumber.substr(0,state.phoneNumber.length-1);
    },
    [RESET_PHONE](state) {
            state.phoneNumber ="";
    }
};

module.exports = {state, mutations};