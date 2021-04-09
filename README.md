# DOM-Jeopardy

This lab is designed to be a practice in JavaScript event listeners and DOM manipulation. The goal is to gain familiarity with `.querySelector()`, `.addEventListener()`, `.createElement()`, iterating through arrays, and begin to explore some more intricate uses of DOM manipulation.

Let's get this party started!

# Jeopardy needs your help!

<img src="./src/JeopardyLogo.gif" alt="Jeopardy Logo" width="300px">

Trying to keep up with the ever changing times, Jeapordy is branching into the digital world and needs our help to prototype their ideas!

Thankfully, they have some data already packaged up into a nice `json` file already. It's currently in the `src` folder saved as `jeopardy_questions`. Let me take a little look at what we got here...

👀

```
{
  category: "EVERYBODY TALKS ABOUT IT...", 
  air_date: "2004-12-31",
  question:
    "'On June 28, 1994 the nat'l weather service began issuing this index that rates the intensity of the sun's radiation'",
  value: "$600",
  answer: "the UV index",
  round: "Jeopardy!",
  show_number: "4680",
}
```

import jeopardy questions into index.js
console.log index 0
make single display card for that one question
show category and value
on click show question
on click show answer (maybe setTimeout as advanced, or look at playing jeopardy song between question and answer?)
more details button shows air date (bonus split it into legible string)
on click sets to starting point

render array


logo at the top

div with empty board as main background

flexbox holds cards (6 categories, 5 questions each)

categories at tops

values on each card

on click card displays question

>>!maybe set audio to play until click again

on click card displays answer

>>can notate if correct or not, adjust current earnings

bonus add input field with .include
