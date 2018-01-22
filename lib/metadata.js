'use strict';

module.exports={

    getSupportedLocales: function(){

        var locales = require('naughty-words');
        var validLocales = Object.keys(locales);
        return validLocales;
    },
};
