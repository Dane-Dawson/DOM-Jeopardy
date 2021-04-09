// console.log("running index.js script")
// console.log(jeopardyQuestions)

document.addEventListener("DOMContentLoaded", () => {

    jeopardyQuestions.map(question => createTiles(question))
});

function createTiles(question) {
    // console.log(question)
    const board = document.querySelector("#jeopardy-board");

    const tile = document.createElement("div");
    tile.className = "tile";

    const value = document.createElement("p");
    value.innerText = question.value;

    value.addEventListener("click", () => {
        console.log(question)
        value.remove();

        const prompt = document.createElement("p");
        prompt.innerText = question.question;

        prompt.addEventListener("click", () => {
            prompt.remove();

            const answer = document.createElement("p");
            answer.innerText = question.answer;
            tile.appendChild(answer);

        })

        tile.appendChild(prompt);
    })
    tile.appendChild(value);
    board.appendChild(tile);

}


{/* <div class="cat-col">
    <div class="tile category"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
    <div class="tile"></div>
</div> */}