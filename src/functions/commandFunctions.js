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

module.exports = { translateToLeetspeak };