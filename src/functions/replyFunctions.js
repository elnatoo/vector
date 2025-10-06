const userGreetings = [
  'hello','hi','hey','howdy','how are you',"how\'s it going",'what\'s up','yo',
  'good morning','good afternoon','good evening','nice to see you','long time no see',
  'gday','sup','what\'s new','what\'s happening', 'waddup', 'wassup', 'hoi', 'hai'
];

function containsGreeting(message) {
  return userGreetings.some(greet => message.includes(greet));
}

module.exports = { containsGreeting };