function translateToLeetspeak(text) {
  const leetMap = {
    a: '4',
    b: '8',
    e: '3',
    g: '6',
    i: '1',
    l: '1',
    o: '0',
    s: '5',
    t: '7',
    z: '2'
  };

  return text.toLowerCase().split('').map(char => leetMap[char] || char).join('');
}

function translateFromLeetspeak(text) {
  const leetReverseMap = {
    '4': 'a',
    '8': 'b',
    '3': 'e',
    '6': 'g',
    '1': 'i', // could also be 'l' but we pick one for simplicity
    '0': 'o',
    '5': 's',
    '7': 't',
    '2': 'z'
  };

  return text.toLowerCase().split('').map(char => leetReverseMap[char] || char).join('');
}

function textToBinary(text) {
  const binary = text.split('').map(char => {
    return char.charCodeAt(0).toString(2).padStart(8, '0');
  }).join(' ');
  
  return binary;
}

function binaryToText(binary) {
  // Check only 0,1 and spaces
  if (!/^[01\s]+$/.test(binary)) {
    return null;
  }

  // Proceed with conversion
  const text = binary.split(' ').map(bin => String.fromCharCode(parseInt(bin, 2))).join('');

  return text;
}

module.exports = { translateToLeetspeak, translateFromLeetspeak, textToBinary, binaryToText };