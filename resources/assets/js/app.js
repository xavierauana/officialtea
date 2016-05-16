/**
 * Created by Xavier on 13/5/2016.
 */

window.$ = window.jQuery = require("jquery");
require("bootstrap/dist/js/npm.js");

var Vue = require('vue');
var Router = require('vue-router');
var Resource = require('vue-resource');
var Vuex = require('vuex');
Vue.use(Router);
Vue.use(Resource);
Vue.use(Vuex);

Vue.config.debug = true;


var variable = require("./vuex/mutation-types");

console.log(variable);

var router = new Router({
    history: true
});

router.map({
    '/home': {
        name: "home",
        component: function(resolve){
            require(['./components/manAdminPage'],resolve)
        }
    }
});

var App = Vue.extend({
    data:function(){
        return {
            user:"abc"
        }
    },
    store: require('./vuex/store')
});

let store = require('./vuex/store');
console.log(store);

router.start(App, "body");

