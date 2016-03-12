'use strict';

var meta = require('./metadata.js');
module.exports= {

    sanitizeLocales: function(localeArray){
  
        var validLocales = meta.getSupportedLocales();
        var locale;
        if(typeof localeArray === 'string' || typeof localeArray === 'number')
        {
            throw "Input to locale should be an array. Eg. ['fr']";
        } 
        if(localeArray === undefined)
        {
            locale = ['en-base']; // default locale is always english-base
        }  
        else if(localeArray.length === 0)
        {
            locale = ['en-base'];
        }
        else
        {
            locale = localeArray; 
        }

        // Check that these are valid locales
        locale.forEach(function(lang){
            if(validLocales.indexOf(lang) == -1)
            {
                throw "Invalid locale supplied to setLocale function. Please supply valid locales including : " + validLocales.toString();
            }
        });

        //All good return
        return locale;
    },

    sanitizeInputWordArray: function(inputWordArray){
    
        if(inputWordArray === undefined || typeof inputWordArray === 'string' || typeof inputWordArray === 'number')
        {
            throw "Input word array should be of a type array. Eg. ['a', 'man']";
        }
        return inputWordArray;
    }, 
};
