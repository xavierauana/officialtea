webpackJsonp([1],{

/***/ 47:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var getters = __webpack_require__(48);
	var actions = __webpack_require__(49);
	var main = {
	    route: {
	        data: function data(transition) {
	            setTimeout(function () {
	                transition.next();
	            }, 3000);
	        }
	    },
	    vuex: {
	        getters: {
	            queue: getters.getQueue,
	            phoneNumber: getters.phoneNumber
	        },
	        actions: {
	            addToQueue: actions.addToQueue,
	            resetQueue: actions.resetQueue,
	            addDigit: actions.addDigit,
	            removePreviousDigit: actions.removePreviousPhoneDigit
	        }
	    },
	    template: __webpack_require__(50)
	};
	
	module.exports = main;

/***/ },

/***/ 48:
/***/ function(module, exports) {

	"use strict";
	
	/**
	 * Created by Xavier on 16/5/2016.
	 */
	
	var getQueue = function getQueue(state) {
	  return state.queue.queue;
	};
	var phoneNumber = function phoneNumber(state) {
	  return state.queue.phoneNumber;
	};
	
	module.exports = {
	  getQueue: getQueue,
	  phoneNumber: phoneNumber
	};

/***/ },

/***/ 49:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by Xavier on 15/5/2016.
	 */
	
	var types = __webpack_require__(44);
	
	var addToQueue = function addToQueue(_ref) {
	    var dispatch = _ref.dispatch;
	
	    setTimeout(function () {
	        dispatch(types.ADD_TO_QUEUE);
	        dispatch(types.RESET_PHONE);
	    }, 2000);
	};
	var resetQueue = function resetQueue(_ref2) {
	    var dispatch = _ref2.dispatch;
	    return dispatch(types.RESET_QUEUE);
	};
	var addDigit = function addDigit(_ref3, digit) {
	    var dispatch = _ref3.dispatch;
	    return dispatch(types.ADD_PHONE_DIGIT, digit);
	};
	var removePreviousPhoneDigit = function removePreviousPhoneDigit(_ref4, digit) {
	    var dispatch = _ref4.dispatch;
	    return dispatch(types.REMOVE_PREVIOUS_DIGIT);
	};
	var resetPhoneNumber = function resetPhoneNumber(_ref5) {
	    var dispatch = _ref5.dispatch;
	    return dispatch(types.RESET_PHONE);
	};
	
	module.exports = {
	    addToQueue: addToQueue,
	    resetQueue: resetQueue,
	    addDigit: addDigit,
	    removePreviousPhoneDigit: removePreviousPhoneDigit,
	    resetPhoneNumber: resetPhoneNumber
	};

/***/ },

/***/ 50:
/***/ function(module, exports) {

	module.exports = "<div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Dashboard</div>\n            <div class=\"panel-body\">\n                <div class=\"col-xs-12\">\n                    <input type=\"number\" name=\"phoneNumber\" id=\"phoneNumber\" :value=\"phoneNumber\" class=\"form-control\" onkeydown=\"return false\">\n                </div>\n                <div class=\"clearfix dialPad\">\n                    <div class=\"col-xs-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"addDigit(1)\">1</button></div>\n                    <div class=\"col-xs-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"addDigit(2)\">2</button></div>\n                    <div class=\"col-xs-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"addDigit(3)\">3</button></div>\n                    <div class=\"col-xs-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"addDigit(4)\">4</button></div>\n                    <div class=\"col-xs-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"addDigit(5)\">5</button></div>\n                    <div class=\"col-xs-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"addDigit(6)\">6</button></div>\n                    <div class=\"col-xs-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"addDigit(7)\">7</button></div>\n                    <div class=\"col-xs-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"addDigit(8)\">8</button></div>\n                    <div class=\"col-xs-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"addDigit(9)\">9</button></div>\n                    <div class=\"col-xs-4  col-xs-offset-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"addDigit(0)\">0</button></div>\n                    <div class=\"col-xs-4 digit\"><button class=\"text-center btn btn-default\" @click.prevent=\"removePreviousDigit\"><i class=\"fa fa-arrow-left\"></i></button></div>\n                </div>\n                <div class=\"col-xs-12\">\n                    <button class=\"btn btn-info btn-block btn-lg\" @click.prevent=\"addToQueue\">Add To Queue</button>\n                </div>\n                <div class=\"well\" v-show=\"queue.length>0\">\n                    <ul class=\"list-unstyled\">\n                        <li v-for=\"member in queue\">{{member.phoneNumber}}</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";

/***/ }

});
//# sourceMappingURL=1.1.js.map