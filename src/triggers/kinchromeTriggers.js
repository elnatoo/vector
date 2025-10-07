const kinchromeTriggers = [
    'kinchrome', 'musclekarp', 'pkpog', 'pokepog'
];

function containsTrigger(message) {
  return kinchromeTriggers.some(trigger => message.includes(trigger));
}

module.exports = { kinchromeTriggers, containsTrigger };