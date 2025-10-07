const helperFunctions = require('../functions/helperFunctions');

const incidentTriggers = [
    'tauros', 'earthquake'
];

// Regex to match 'tauros' or 'earthquake'
// This regex will allow for any characters between the letters
// This expression should also identify l33t-speak/accents
// Only passes test if the letters are in order in a message
const taurosRegex = new RegExp(
  [
    "[t7+ţțṫṯṭ]",             // t or variants
    "[\\u0300-\\u036f']?.{0,7}?", // up to 7 chars (non-greedy)
    "[a4@àáâäãåāáǎ]",          // a or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[uµvüùúûū]",              // u or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[r2®řŕ]",                 // r or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[o0ø()òóôöõōőǒ]",         // o or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[s5$zśšşș]"               // s or variants
  ].join(""),
  "i"
);

const earthquakeRegex = new RegExp(
  [
    "[e3èéêëēėę]",            // e or variants
    "[\\u0300-\\u036f']?.{0,7}?", 
    "[a4@àáâäãåāáǎ]",         // a or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[r2řŕ]",                 // r or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[t7+ţțṫṯṭ]",             // t or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[h#ḥĥ]",                 // h or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[q9ɋ]",                  // q or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[uµvùúûū]",              // u or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[a4@àáâäãåāáǎ]",         // a or variants (second A)
    "[\\u0300-\\u036f']?.{0,7}?",
    "[k<ķ]",                  // k or variants
    "[\\u0300-\\u036f']?.{0,7}?",
    "[e3èéêëēėę]"             // final e or variants
  ].join(""),
  "i"
);

function containsTrigger(message) {
    return helperFunctions.containsKeyword(message, incidentTriggers);
}

function almostContainsTrigger(message) {
    return (message.includes('tauro') || message.includes('eq') || taurosRegex.test(message) || earthquakeRegex.test(message));
}

module.exports = { incidentTriggers, containsTrigger, almostContainsTrigger };