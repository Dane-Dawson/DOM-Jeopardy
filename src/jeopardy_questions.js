const jeopardyCategories = [
  "prehistoric times",
  "batman tv villains",
  "let's eat",
  "you need a drink",
  "animated creatures",
  "celebrity lipsticks"
]

const jeopardyQuestions = [
  {
    "id": 1,
    "category": "prehistoric times",
    "value": 200,
    "question": "Historians generally agree that the development of this separates prehistory from history",
    "answer": "Writing"
  },
  {
    "id": 2,
    "category": "prehistoric times",
    "value": 400,
    "question": "Eohippus was not an early hippopotamus, but the first one of these animals",
    "answer": "Horse"
  },
  {
    "id": 3,
    "category": "prehistoric times",
    "value": 600,
    "question": "In the Pleistocene epoch, these gouged at gorges in river valleys; when they melted, rocks & soil were left",
    "answer": "Glaciers"
  },
  {
    "id": 4,
    "category": "prehistoric times",
    "value": 800,
    "question": "This \"man\" found in a German valley in 1856 was the first fossil recognized as a prehistoric human",
    "answer": "Neanderthal"
  },
  {
    "id": 5,
    "category": "prehistoric times",
    "value": 1000,
    "question": "This coal-forming period consisted of 2 portions:  Pennsylvanian & Mississippian",
    "answer": "Carboniferous"
  },
  {
    "id": 6,
    "category": "batman tv villains",
    "value": 200,
    "question": "Burgess Meredith as this odd bird",
    "answer": "the Penguin",
  },
  {
    "id": 7,
    "category": "batman tv villains",
    "value": 400,
    "question": "Julie Newmar, Eartha Kitt & Lee Meriwether as this purr-fect villain (not all at the same time)",
    "answer": "Catwoman",
  },
  {
    "id": 8,
    "category": "batman tv villains",
    "value": 600,
    "question": "Frank Gorshin as this puzzling criminal",
    "answer": "the Riddler",
  },
  {
    "id": 9,
    "category": "batman tv villains",
    "value": 800,
    "question": "Cesar Romero as this kooky cutup",
    "answer": "the Joker",
  },
  {
    "id": 10,
    "category": "batman tv villains",
    "value": 1000,
    "question": "Victor Buono as this felonious pharaoh",
    "answer": "King Tut"
  },
  {
    "id": 11,
    "category": "let's eat",
    "value": 200,
    "question": "3 of the Dead Sea Scrolls tell of the preparation of a sacred meal of bread & this potent potable",
    "answer": "wine"
  },
  {
    "id": 12,
    "category": "let's eat",
    "value": 400,
    "question": "Put on your goggles at breakfast when eating Citrus paradisi, this fruit that grows in clusters",
    "answer": "grapefruit"
  },
  {
    "id": 13,
    "category": "let's eat",
    "value": 600,
    "question": "A food staple on any camping trip is gorp, \"good old raisins &\" these",
    "answer": "peanuts"
  },
  {
    "id": 14,
    "category": "let's eat",
    "value": 800,
    "question": "Some soldiers might say it stands for \"yuck!\", but \"MRE\" stands for this in the army",
    "answer": "a meal ready to eat"
  },
  {
    "id": 15,
    "category": "let's eat",
    "value": 1000,
    "question": "Actress Suzette Reichenberg may have lent her name to this dish that is served on fire",
    "answer": "Crêpe Suzette"
  },
  {
    "id": 16,
    "category": "you need a drink",
    "value": 200,
    "question": "George Washington was a fan of this holiday drink but used whiskey & brandy as well as rum",
    "answer": "egg nog",
  },
  {
    "id": 17,
    "category": "you need a drink",
    "value": 400,
    "question": "To be patriotic during WWII, this soda invented in 1898 adopted red, white & blue colors, still on its logo today",
    "answer": "Pepsi",
  },
  {
    "id": 18,
    "category": "you need a drink",
    "value": 600,
    "question": "A person used to be smashed onto a new boat as a sacrifice; this effervescent drink is less painful",
    "answer": "champagne",
  },
  {
    "id": 19,
    "category": "you need a drink",
    "value": 800,
    "question": "To make this 4-letter drink, the rice has to be milled because the starch, which ferments, is in the center of the rice",
    "answer": "sake",
  },
  {
    "id": 20,
    "category": "you need a drink",
    "value": 1000,
    "question": "White & red wines differ in that the stems & these 2 other parts of the grape are not used for white",
    "answer": "the skins & the seeds",
  },
  {
    "id": 21,
    "category": "animated creatures",
    "value": 200,
    "question": "Bruno the dog is turned into a footman for the horse-drawn pumpkin coach in this animated film",
    "answer": "Cinderella",
  },
  {
    "id": 22,
    "category": "animated creatures",
    "value": 400,
    "question": "This pet of Lilo's is actually Genetic Experiment 626, a fugitive alien",
    "answer": "Stitch",
  },
  {
    "id": 23,
    "category": "animated creatures",
    "value": 600,
    "question": "In this film Rhino the hamster helps his dog hero, who doesn't actually have super powers",
    "answer": "Bolt",
  },
  {
    "id": 24,
    "category": "animated creatures",
    "value": 800,
    "question": "In this film the mouse Roddy St. James finds a new world after going down the bathroom's whirlpool",
    "answer": "Flushed Away",
  },
  {
    "id": 25,
    "category": "animated creatures",
    "value": 1000,
    "question": "Lovelace is a rockhopper who will answer any of life's questions for the price of a pebble in this film",
    "answer": "Happy Feet",
  },
  {
    "id": 26,
    "category": "celebrity lipsticks",
    "value": 200,
    "question": "\"Lindsay\", designed by this \"Mean Girls\" actress, is a clear pink cream enclosed in a recyclable case made from corn",
    "answer": "(Lindsay) Lohan",
  },
  {
    "id": 27,
    "category": "celebrity lipsticks",
    "value": 400,
    "question": "This \"Dreamgirl\" has hawked L'Oreal's \"Infallible Never Fail Lipcolour\"; experience the redundancy!",
    "answer": "Beyoncé",
  },
  {
    "id": 28,
    "category": "celebrity lipsticks",
    "value": 600,
    "question": "\"Evangeline\" is a sheer vibrant coral cream by this ABC show's Ms. Lilly; all the smoke monsters wear it today",
    "answer": "Lost",
  },
  {
    "id": 29,
    "category": "celebrity lipsticks",
    "value": 800,
    "question": "Lip-wise, Kim Raver designed \"Cherry Bliss\": career-wise, she had 3 really rough days as Audrey Raines on this Fox drama",
    "answer": "24",
  },
  {
    "id": 30,
    "category": "celebrity lipsticks",
    "value": 1000,
    "question": "Sarah Chalke moonlighted from her day job as Dr. Elliot Reid on this medical sitcom to create the lipstick \"Sarah\"",
    "answer": "Scrubs",
  }
]


