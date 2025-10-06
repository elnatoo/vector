const mugshotOptions = Object.freeze({
    DEFAULT: 'default',       /* 0 */
    ANGRY: 'angry',           /* 1 */
    CRYING: 'crying',         /* 2 */
    DETERMINED: 'determined', /* 3 */
    DIZZY: 'dizzy',           /* 4 */
    EMOTIONAL: 'emotional',   /* 5 */
    HAPPY: 'happy',           /* 6 */
    INSPIRED: 'inspired',     /* 7 */
    JOYFUL: 'joyful',         /* 8 */
    PENSIVE: 'pensive',       /* 9 */
    RELIEVED: 'relieved',     /* 10 */
    SAD: 'sad',               /* 11 */
    SHOUTING: 'shouting',     /* 12 */
    STUNNED: 'stunned',       /* 13 */
    SURPRISED: 'surprised',   /* 14 */
    TINKERING: 'tinkering'    /* 15 */
});

const greetingMugshots = [
    mugshots.DEFAULT, 
    mugshots.HAPPY, 
    mugshots.INSPIRED, 
    mugshots.JOYFUL,
    mugshots.SHOUTING,
    mugshots.EMOTIONAL
];

module.exports = { mugshotOptions, greetingMugshots };