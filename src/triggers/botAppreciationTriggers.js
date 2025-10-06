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
    'op bot'
];

function containsTrigger(message) {
    return botAppreciationTriggers.some(trigger => message.includes(trigger));
}

module.exports = { botAppreciationTriggers, containsTrigger };