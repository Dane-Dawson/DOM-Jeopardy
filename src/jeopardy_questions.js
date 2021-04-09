
const jeopardyQuestions = [
  {
    "category": "prehistoric times",
    "value": 200,
    "question": "Historians generally agree that the development of this separates prehistory from history",
    "answer": "Writing"
  },
  {
    "category": "prehistoric times",
    "value": 400,
    "question": "Eohippus was not an early hippopotamus, but the first one of these animals",
    "answer": "Horse"
  },
  {
    "category": "prehistoric times",
    "value": 600,
    "question": "In the Pleistocene epoch, these gouged at gorges in river valleys; when they melted, rocks & soil were left",
    "answer": "Glaciers"
  },
  {
    "category": "prehistoric times",
    "value": 800,
    "question": "This \"man\" found in a German valley in 1856 was the first fossil recognized as a prehistoric human",
    "answer": "Neanderthal"
  },
  {
    "category": "prehistoric times",
    "value": 1000,
    "question": "This coal-forming period consisted of 2 portions:  Pennsylvanian & Mississippian",
    "answer": "Carboniferous"
  },
  {
    "category": "batman tv villains",
    "value": 200,
    "question": "Burgess Meredith as this odd bird",
    "answer": "the Penguin",
  },
  {
    "category": "batman tv villains",
    "value": 400,
    "question": "Julie Newmar, Eartha Kitt & Lee Meriwether as this purr-fect villain (not all at the same time)",
    "answer": "Catwoman",
  },
  {
    "category": "batman tv villains",
    "value": 600,
    "question": "Frank Gorshin as this puzzling criminal",
    "answer": "the Riddler",
  },
  {
    "category": "batman tv villains",
    "value": 800,
    "question": "Cesar Romero as this kooky cutup",
    "answer": "the Joker",
  },
  {
    "category": "batman tv villains",
    "value": 1000,
    "question": "Victor Buono as this felonious pharaoh",
    "answer": "King Tut"
  },
  {
    "category": "let's eat",
    "value": 200,
    "question": "3 of the Dead Sea Scrolls tell of the preparation of a sacred meal of bread & this potent potable",
    "answer": "wine"
  },
  {
    "category": "let's eat",
    "value": 400,
    "question": "Put on your goggles at breakfast when eating Citrus paradisi, this fruit that grows in clusters",
    "answer": "grapefruit"
  },
  {
    "category": "let's eat",
    "value": 600,
    "question": "A food staple on any camping trip is gorp, \"good old raisins &\" these",
    "answer": "peanuts"
  },
  {
    "category": "let's eat",
    "value": 800,
    "question": "Some soldiers might say it stands for \"yuck!\", but \"MRE\" stands for this in the army",
    "answer": "a meal ready to eat"
  },
  {
    "category": "let's eat",
    "value": 1000,
    "question": "Actress Suzette Reichenberg may have lent her name to this dish that is served on fire",
    "answer": "Crêpe Suzette"
  },
  {
    "category": "you need a drink",
    "value": 200,
    "question": "George Washington was a fan of this holiday drink but used whiskey & brandy as well as rum",
    "answer": "egg nog",
  },
  {
    "category": "you need a drink",
    "value": 400,
    "question": "To be patriotic during WWII, this soda invented in 1898 adopted red, white & blue colors, still on its logo today",
    "answer": "Pepsi",
  },
  {
    "category": "you need a drink",
    "value": 600,
    "question": "A person used to be smashed onto a new boat as a sacrifice; this effervescent drink is less painful",
    "answer": "champagne",
  },
  {
    "category": "you need a drink",
    "value": 800,
    "question": "To make this 4-letter drink, the rice has to be milled because the starch, which ferments, is in the center of the rice",
    "answer": "sake",
  },
  {
    "category": "you need a drink",
    "value": 1000,
    "question": "White & red wines differ in that the stems & these 2 other parts of the grape are not used for white",
    "answer": "the skins & the seeds",
  },
  {
    "category": "animated creatures",
    "value": 200,
    "question": "Bruno the dog is turned into a footman for the horse-drawn pumpkin coach in this animated film",
    "answer": "Cinderella",
  },
  {
    "category": "animated creatures",
    "value": 400,
    "question": "This pet of Lilo's is actually Genetic Experiment 626, a fugitive alien",
    "answer": "Stitch",
  },
  {
    "category": "animated creatures",
    "value": 600,
    "question": "In this film Rhino the hamster helps his dog hero, who doesn't actually have super powers",
    "answer": "Bolt",
  },
  {
    "category": "animated creatures",
    "value": 800,
    "question": "In this film the mouse Roddy St. James finds a new world after going down the bathroom's whirlpool",
    "answer": "Flushed Away",
  },
  {
    "category": "animated creatures",
    "value": 1000,
    "question": "Lovelace is a rockhopper who will answer any of life's questions for the price of a pebble in this film",
    "answer": "Happy Feet",
  },
  {
    "category": "celebrity lipsticks",
    "value": 200,
    "question": "\"Lindsay\", designed by this \"Mean Girls\" actress, is a clear pink cream enclosed in a recyclable case made from corn",
    "answer": "(Lindsay) Lohan",
  },
  {
    "category": "celebrity lipsticks",
    "value": 400,
    "question": "This \"Dreamgirl\" has hawked L'Oreal's \"Infallible Never Fail Lipcolour\"; experience the redundancy!",
    "answer": "Beyoncé",
  },
  {
    "category": "celebrity lipsticks",
    "value": 600,
    "question": "\"Evangeline\" is a sheer vibrant coral cream by this ABC show's Ms. Lilly; all the smoke monsters wear it today",
    "answer": "Lost",
  },
  {
    "category": "celebrity lipsticks",
    "value": 800,
    "question": "Lip-wise, Kim Raver designed \"Cherry Bliss\": career-wise, she had 3 really rough days as Audrey Raines on this Fox drama",
    "answer": "24",
  },
  {
    "category": "celebrity lipsticks",
    "value": 1000,
    "question": "Sarah Chalke moonlighted from her day job as Dr. Elliot Reid on this medical sitcom to create the lipstick \"Sarah\"",
    "answer": "Scrubs",
  }
]




    // const jeopardyQuestions = [
    //   {
    //     category: "HISTORY",
    //     air_date: "2004-12-31",
    //     question:
    //       "'For the last 8 years of his life, Galileo was under house arrest for espousing this man's theory'",
    //     value: "$200",
    //     answer: "Copernicus",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "ESPN's TOP 10 ALL-TIME ATHLETES",
    //     air_date: "2004-12-31",
    //     question:
    //       "'No. 2: 1912 Olympian; football star at Carlisle Indian School; 6 MLB seasons with the Reds, Giants & Braves'",
    //     value: "$200",
    //     answer: "Jim Thorpe",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "EVERYBODY TALKS ABOUT IT...",
    //     air_date: "2004-12-31",
    //     question:
    //       "'The city of Yuma in this state has a record average of 4,055 hours of sunshine each year'",
    //     value: "$200",
    //     answer: "Arizona",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "THE COMPANY LINE",
    //     air_date: "2004-12-31",
    //     question:
    //       "'In 1963, live on \"The Art Linkletter Show\", this company served its billionth burger'",
    //     value: "$200",
    //     answer: "McDonald\\'s",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "EPITAPHS & TRIBUTES",
    //     air_date: "2004-12-31",
    //     question:
    //       "'Signer of the Dec. of Indep., framer of the Constitution of Mass., second President of the United States'",
    //     value: "$200",
    //     answer: "John Adams",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "3-LETTER WORDS",
    //     air_date: "2004-12-31",
    //     question:
    //       "'In the title of an Aesop fable, this insect shared billing with a grasshopper'",
    //     value: "$200",
    //     answer: "the ant",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "HISTORY",
    //     air_date: "2004-12-31",
    //     question:
    //       "'Built in 312 B.C. to link Rome & the South of Italy, it's still in use today'",
    //     value: "$400",
    //     answer: "the Appian Way",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "ESPN's TOP 10 ALL-TIME ATHLETES",
    //     air_date: "2004-12-31",
    //     question:
    //       "'No. 8: 30 steals for the Birmingham Barons; 2,306 steals for the Bulls'",
    //     value: "$400",
    //     answer: "Michael Jordan",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "EVERYBODY TALKS ABOUT IT...",
    //     air_date: "2004-12-31",
    //     question:
    //       "'In the winter of 1971-72, a record 1,122 inches of snow fell at Rainier Paradise Ranger Station in this state'",
    //     value: "$400",
    //     answer: "Washington",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "THE COMPANY LINE",
    //     air_date: "2004-12-31",
    //     question:
    //       "'This housewares store was named for the packaging its merchandise came in & was first displayed on'",
    //     value: "$400",
    //     answer: "Crate & Barrel",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "EPITAPHS & TRIBUTES",
    //     air_date: "2004-12-31",
    //     question: "'\"And away we go\"'",
    //     value: "$400",
    //     answer: "Jackie Gleason",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "3-LETTER WORDS",
    //     air_date: "2004-12-31",
    //     question:
    //       "'Cows regurgitate this from the first stomach to the mouth & chew it again'",
    //     value: "$400",
    //     answer: "the cud",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    //   {
    //     category: "HISTORY",
    //     air_date: "2004-12-31",
    //     question:
    //       "'In 1000 Rajaraja I of the Cholas battled to take this Indian Ocean island now known for its tea'",
    //     value: "$600",
    //     answer: "Ceylon (or Sri Lanka)",
    //     round: "Jeopardy!",
    //     show_number: "4680",
    //   },
    // ];

