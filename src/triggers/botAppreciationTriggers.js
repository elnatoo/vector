const helperFunctions = require('../functions/helperFunctions');

const botAppreciationTriggers = [
    'good bot',
    'nice bot',
    'awesome bot',
    'best bot', 
    'amazing bot', 
    'great bot', 
    'top bot', 
    'super bot', 
    'fantastic bot', 
    'brilliant bot',
    'marvelous bot',
    'op bot',
    'epic bot',
    'sweet bot',
    'love you'
];

function containsTrigger(message) {
    return helperFunctions.containsKeyword(message, botAppreciationTriggers);
}

module.exports = { botAppreciationTriggers, containsTrigger };