console.log("running index.js script")
console.log(jeopardyQuestions)

document.addEventListener("DOMContentLoaded", () => {

    jeopardyQuestions.map(question => createTiles(question))
});

function createTiles(question){
    console.log(question)
    const board = document.querySelector("#jeopardy-board");

    
    
}