'use strict';

var _ = require('lodash'); 
var sanitizer = require('./lib/sanitizer.js');
var meta = require('./lib/metadata.js');

var dictionary = [];
var locale = [];


module.exports = {

    /* This method sets the locale and also populates the dictionary based on the locale*/
    setLocale: function(localeArray){
        dictionary = [];
        locale = [];
        //Validate the incoming locales
        locale = sanitizer.sanitizeLocales(localeArray);

        //Now start populating dictionary; before that clear out the dictionary
        locale.forEach(function(lang){
            // First require the module
            var mod = require('./seed/'+lang);
            var arrayContents = mod();
            var otherDictionary = _.concat(dictionary, arrayContents);
            dictionary = _.uniq(otherDictionary);
        });
    },

    /* This method returns the current locales set on the object */
    getLocale: function(){
        if(locale === undefined || locale.length == 0)
        {
            throw "It appears that locale is not set. Perhaps you forgot to call setLocale ?";
        }
        return locale; 
    },

    /* This method returns a list of available locales supported by the module */
    showAvailableLocales: function(){
        return meta.getSupportedLocales();
    },
  
    /* This method returns a lit of words currently added to the dictionary */ 
    getDictionary: function(){
        return dictionary;
    },

    /* This method allows you to add more words to the current directory instance incase they are not supported by our seeds*/
    addWords: function(inputWordArray){
        
        var sanitizedInputWordArray = sanitizer.sanitizeInputWordArray(inputWordArray);
        var otherDictionary = _.concat(dictionary, sanitizedInputWordArray);
        dictionary = _.uniq(otherDictionary);
    },
    
    /* This method removes words from the dictionary instance */
    removeWords: function(inputWords){
        if(dictionary.indexOf(inputWords) != -1)
        {
            var idx = dictionary.indexOf(inputWords);
            dictionary.splice(idx, 1);
        }
    },

    /* This method replaces the bad words in the string with your replacement characeter */
    replace: function(origString, replacementPattern){

    },
    
};
