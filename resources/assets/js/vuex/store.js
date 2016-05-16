/**
 * Created by Xavier on 15/5/2016.
 */
let Vue = require('vue');
let Vuex = require('vuex');

Vue.use(Vuex);

Vue.config.debug = true;

module.exports = new Vuex.Store({
    modules:{
        queue: require("./modules/queue")
    },
    strict:true
});