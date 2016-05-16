/**
 * Created by Xavier on 16/5/2016.
 */

const getQueue = state => state.queue.queue;
const phoneNumber = state => state.queue.phoneNumber;

module.exports =  {
    getQueue,
    phoneNumber
};