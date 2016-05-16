let getters = require("./../../vuex/getters");
let actions = require("./../../vuex/actions");
var main = {
    route: {
        data: transition=> {
            setTimeout(()=> {
                transition.next()
            }, 3000)
        }
    },
    vuex: {
        getters: {
            queue: getters.getQueue,
            phoneNumber: getters.phoneNumber,
        },
        actions: {
            addToQueue: actions.addToQueue,
            resetQueue: actions.resetQueue,
            addDigit: actions.addDigit,
            removePreviousDigit: actions.removePreviousPhoneDigit
        }
    },
    template: require('./mageAdminPage.html')
};

module.exports = main;
