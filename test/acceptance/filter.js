var assert = require('chai').assert;
var filter = require('../../filter.js');

describe.only('#replace test', function(){

    it('Should throw an error when setLocale is not called', function(){
        assert.throws(function(){filter.replace('this is ass')}, "Dictionary is not populated. Perhaps you forgot to call setLocale ?")
    });
    
    it('Should replace bad words with stars when no replacement patterns and words are given', function(){
        filter.setLocale();   
        var dict = filter.getDictionary();
        var inputString = 'This is a bad string my ass. Also this string contains dick and vagina and bastard. But this is just a test. Do not mind fuck';
        var gotOutput = filter.replace(inputString);
        var expectedOutput = 'This is a bad string my ***. Also this string contains **** and ****** and *******. But this is just a test. Do not mind ****'
        assert.equal(gotOutput, expectedOutput, 'Verified that obtained output matches expected one')    
    });

    it('Should replace bad words with the provided word given replacement pattern is word', function(){
        filter.setLocale();
        var dict = filter.getDictionary();
        var inputString = 'This is a bad string my ass. Also this string contains dick and vagina and bastard. But this is just a test. Do not mind fuck';
        var gotOutput = filter.replace(inputString, 'word', 'FOO');
        var expectedOutput = 'This is a bad string my FOO. Also this string contains FOO and FOO and FOO. But this is just a test. Do not mind FOO';
        assert.equal(gotOutput, expectedOutput, 'Verified that obtained output matches expected one')    
    });
    
    it('Should replace bad words with grawlix given replacement pattern is grawlix', function(){
        filter.setLocale();
        var dict = filter.getDictionary();
        var inputString = 'This is a bad string my ass. Also this string contains dick and vagina and bastard. But this is just a test. Do not mind fuck';
        var gotOutput = filter.replace(inputString, 'grawlix');
        assert.include(gotOutput, '&', 'Verified that obtained output matches expected one')    
    });
    
    it('Should replace bad words with BLEEP when replacement patterns is word but replacement word is not given', function(){
        filter.setLocale();   
        var dict = filter.getDictionary();
        var inputString = 'This is a bad string my ass. Also this string contains dick and vagina and bastard. But this is just a test. Do not mind fuck';
        var gotOutput = filter.replace(inputString, 'word');
        var expectedOutput = 'This is a bad string my BLEEP. Also this string contains BLEEP and BLEEP and BLEEP. But this is just a test. Do not mind BLEEP';
        assert.equal(gotOutput, expectedOutput, 'Verified that obtained output matches expected one')    
    });
    
    it('Should ignore the replacement word if the replacement pattern is grawlix', function(){
        filter.setLocale();   
        var dict = filter.getDictionary();
        var inputString = 'This is a bad string my ass. Also this string contains dick and vagina and bastard. But this is just a test. Do not mind fuck';
        var gotOutput = filter.replace(inputString, 'grawlix', '***');
        assert.include(gotOutput, '&', 'Verified that obtained output matches expected one')    
    });

    it('Should replace bad words with given characters when replacement pattern is character', function(){
        filter.setLocale();   
        var dict = filter.getDictionary();
        var inputString = 'This is a bad string my ass. Also this string contains dick and vagina and bastard. But this is just a test. Do not mind fuck';
        var gotOutput = filter.replace(inputString, 'character', ';');
        var expectedOutput = 'This is a bad string my ;;;. Also this string contains ;;;; and ;;;;;; and ;;;;;;;. But this is just a test. Do not mind ;;;;'
        assert.equal(gotOutput, expectedOutput, 'Verified that obtained output matches expected one')    
    });
    
    it('Should replace bad words with given characters when replacement pattern is character when no matter what the character is', function(){
        filter.setLocale();   
        var dict = filter.getDictionary();
        var inputString = 'This is a bad string my ass. Also this string contains dick and vagina and bastard. But this is just a test. Do not mind fuck';
        var gotOutput = filter.replace(inputString, 'character', '#@');
        var expectedOutput = 'This is a bad string my #@#@#@. Also this string contains #@#@#@#@ and #@#@#@#@#@#@ and #@#@#@#@#@#@#@. But this is just a test. Do not mind #@#@#@#@'
        assert.equal(gotOutput, expectedOutput, 'Verified that obtained output matches expected one')    
    });
});
