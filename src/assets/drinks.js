const mugshots = require('./mugshots/mugshotOptions');

const drinks = [
  {
    name: "Mystery Potion",
    icon: "🧪",
    reactionMessage: "Hey, when did everyone get so tall? \n\n**STATUS**: Tiny! ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.DIZZY
  },
  {
    name: "Elixir",
    icon: "🍷",
    reactionMessage: "I felt something!? \n\n**STATUS**: Magical powers enhanced! ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.SHOUTING
  },
  {
    name: "Hot Chocolate",
    icon: "☕",
    reactionMessage: "+2 Comfort! \n\n**STATUS**: Warm and cozy. ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.HAPPY
  },
  {
    name: "Lemonade",
    icon: "🍋",
    reactionMessage: "If I had a nickel for every sip I would take from this lemonade, I would be a mil-lemon-aire \n\n**STATUS**: Sour-sweet! ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.INSPIRED
  },
  {
    name: "Battery Acid",
    icon: "<:020QueentextTRUE:1391589533383917740>",
    reactionMessage: "Probably best not to drink that anymore... \n\n**STATUS**: Rebooting... ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.STUNNED
  },
  {
    name: "Poison",
    icon: "☠️",
    reactionMessage: "This tastes like nothing. \n\n**STATUS**: Immune ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.DEFAULT
  },
  {
    name: "Banana Milk",
    icon: "🍌",
    reactionMessage: "Quick, get the banana! \n\n**STATUS**: Potassium! ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.JOYFUL
  },
  {
    name: "Horchata",
    icon: "🥛",
    reactionMessage: "OOOOOOOOOOOOOO! MORE OF THAT PLEASE! \n\n**STATUS**: Ecstatic ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.HAPPY
  },
  {
    name: "Salsa",
    icon: "🔥",
    reactionMessage: "Hey, this is kinda spicy...! \n\n**STATUS**: IT BURNS! ~BZZT~",
    reactionMugshot: mugshots.mugshotOptions.CRYING
  },
  {
    name: "Energy Drink",
    icon: "⚡",
    reactionMessage: "MY POWER LEVEL IS OVER 9000! I CAN DO ANYTHING! \n\n**STATUS**: Energy levels at 10000% normal capacity ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.SHOUTING
  },
  {
    name: "Coffee",
    icon: "☕",
    reactionMessage: "Woah! I donut need a nap anymore! \n\nSet napTime variable equal to 10 hours \n\n**STATUS**: Feeling productive! ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.TINKERING
  },
  {
    name: "Juice Box",
    icon: "🧃",
    reactionMessage: "Not bad! \n\n**STATUS**: Energy levels at 101% normal capacity ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.JOYFUL
  },
  {
    name: "Spider Cider",
    icon: "🕷️",
    reactionMessage: "Tastes expensive... Wait, why do I hear spiders dancing? \n\n**STATUS**: Nervous ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.RELIEVED
  },
  {
    name: "Frozen Milkshake",
    icon: "🥤",
    reactionMessage: "Smooth and sweet! A bit cold-- \n\n**STATUS**: Brainfreeze ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.SURPRISED
  },
  {
    name: "Root Beer",
    icon: "🍺",
    reactionMessage: "A nostalgic fizz. \n\n**STATUS**: Not drunk ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.DEFAULT
  },
  {
    name: "Boba Tea",
    icon: "<:kirboTea:812934640594845696>",
    reactionMessage: "BOBA! \n\n**STATUS**: Relaxed ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.HAPPY
  },
  {
    name: "Piña Colada",
    icon: "🍍",
    reactionMessage: "IF YOU LIKE PIÑA COLADAS! AND GETTIN' CAUGHT IN THE RAIN! \n\n **STATUS**: Karaoke ~bzzt~",
    reactionMugshot: mugshots.mugshotOptions.JOYFUL
  }
];

module.exports = drinks;