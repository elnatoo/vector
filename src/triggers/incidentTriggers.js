const incidentTriggers = [
    'tauros', 'earthquake'
];

// Regex to match 'tauros' or 'earthquake'
// This regex will allow for any characters between the letters
// This expression should also identify l33t-speak/accents
const taurosRegex = /[t7+ţțṫṯṭ][\u0300-\u036f']?.*[a4@àáâäãåāáǎ][\u0300-\u036f']?.*[uvüµùúûū][\u0300-\u036f']?.*[r2®řŕ][\u0300-\u036f']?.*[o0ø()òóôöõōőǒ][\u0300-\u036f']?.*[s5$zśšşș][\u0300-\u036f']?/i;
const earthquakeRegex = /[e3èéêëēėę][\u0300-\u036f']?.*[a4@àáâäãåāáǎ][\u0300-\u036f']?.*[r2řŕ][\u0300-\u036f']?.*[t7+ţțṫṯṭ][\u0300-\u036f']?.*[h#ḥĥ][\u0300-\u036f']?.*[q9ɋ][\u0300-\u036f']?.*[uµvùúûū][\u0300-\u036f']?.*[a4@àáâäãåāáǎ][\u0300-\u036f']?.*[k<ķ][\u0300-\u036f']?.*[e3èéêëēėę][\u0300-\u036f']?/i;

function containsTrigger(message) {
    return incidentTriggers.some(trigger => message.includes(trigger));
}

function almostContainsTrigger(message) {
    return (message.includes('tauro') || message.includes('eq') || taurosRegex.test(message) || earthquakeRegex.test(message));
}

module.exports = { incidentTriggers, containsTrigger, almostContainsTrigger };