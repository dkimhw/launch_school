

### Internationalization 2

Question:

* Building on your solutions from the previous exercises, write a function localGreet that takes a locale as input, and returns a greeting. The locale allows us to greet people from different countries differently also when they share the language, for example:


```javascript
function extractRegion(locale) {
    return locale.split('_')[1].split('.')[0];
}

function extractLanguage(locale) {
    return locale.split('_')[0];
}

function greet(languageCode) {
  switch (languageCode) {
    case 'en': return 'Hi!';
    case 'fr': return 'Salut!';
    case 'pt': return 'Olá!';
    case 'de': return 'Hallo!';
    case 'sv': return 'Hej!';
    case 'af': return 'Haai!';
  }    
}

const localGreet = (locale) => {
    let lang = extractLanguage(locale);
    let region = extractRegion(locale);

    switch (region) {
        case 'US': return 'Hey!';
        case 'GB': return 'Hello!';
        case 'AU': return 'Howdy!';
        default: return greet(lang);
    }
}

localGreet('en_US.UTF-8'); // 'Hey!'
localGreet('en_GB.UTF-8'); // 'Hello!'
localGreet('en_AU.UTF-8'); // 'Howdy!'

localGreet('fr_FR.UTF-8'); // 'Salut!'
localGreet('fr_CA.UTF-8'); // 'Salut!'
localGreet('fr_MA.UTF-8'); // 'Salut!'
```