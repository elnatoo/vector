const helperFunctions = require('./helperFunctions');

const userGreetings = [
  'hello','hi','hey','howdy','how are you',"how\'s it going",'what\'s up','yo',
  'good morning','good afternoon','good evening','nice to see you','long time no see',
  'gday','sup','what\'s new','what\'s happening', 'waddup', 'wassup', 'hoi', 'hai'
];

const userGoodnights = [
  'goodnight', 'gnite', 'goodnite', 'have a goodnight', 'have a goodnite'
];

const rickRollLyrics = [
  "we're no strangers to love",
  "you know the rules and so do i",
  "a full commitment's what i'm thinking of",
  "you wouldn't get this from any other guy",
  "never gonna give you up",
  "never gonna let you down",
  "never gonna run around and desert you",
  "never gonna make you cry",
  "never gonna say goodbye",
  "never gonna tell a lie and hurt you"
]

function containsGreeting(message) {
  return helperFunctions.containsKeyword(message, userGreetings);
}

function containsGoodnight(message) {
  return helperFunctions.containsKeyword(message, userGoodnights);
}

function containsRickRoll(message) {
  return helperFunctions.containsKeyword(message, rickRollLyrics);
}

module.exports = { containsGreeting, containsGoodnight, containsRickRoll };