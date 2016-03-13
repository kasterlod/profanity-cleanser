# profanity-cleanser
[![Build Status](https://travis-ci.org/shwetasabne/profanity-cleanser.svg?branch=master)](https://travis-ci.org/shwetasabne/profanity-cleanser)

A simple node utility that removes/replaces profane words in given text. Very easily configurable wherein you can set the locale and replacement patterns of your choice.

## Locales supported

The module uses the profane words curated and maintained by [Shutterstock Project](https://github.com/shutterstock/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words).

*Default locale is en-base*

## Supported replacement patterns

| Replacement Pattern | Default replacement Word/Characters | Sample Output |
| --- | --- | --- |
| word | BLEEP | Your ass becomes Your BLEEP |
| character | * | Your ass becomes Your \*\*\* |
| grawlix | - | Your ass becomes You &!# | 

*Default replacement pattern is 'star'*

## methods

### cleanser.setLocale([string])

Validates and sets the locale for profanity check based on the array passed. Acceptable locales map to the one's supported ./seeds directory. Setting locale implies using the badwords in the corresponding ./seeds/<locale> file for profanity checking.

```
var cleanser = require('profanity-cleanser');

// Sets to default locale of en-base
cleanser.setLocale(); 

// Sets the locale to hindi spanish and japanese.
cleanser.setLocale(['hi', 'es', 'ja']);
``` 

### cleanser.getLocale()

Returns the currenly set locales.

```
var cleanser = require('profanity-cleanser');

//Set locale to hindi spanish and japanese
cleanser.setLocale(['hi', 'es', 'ja'])

var output = cleanser.getLocale();

// Outputs hi,es,ja
console.log(output.toString())
```

## References

- This node module is based on the [BanBuilder](http://banbuilder.com/)  module written for php.

- Also used @jwils0n's [profanity-filter](https://github.com/jwils0n/profanity-filter) as reference for grawlix implementation.

- Seed data for locale based bad words is obtained from [Shutterstock Project](https://github.com/shutterstock/List-of-Dirty-Naughty-Obscene-and-Otherwise-Bad-Words).
 

