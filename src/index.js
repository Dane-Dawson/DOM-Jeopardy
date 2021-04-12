document.addEventListener("DOMContentLoaded", () => {
    jeopardyQuestions.map(question => createTiles(question))
    jeopardyCategories.map(cateory => renderCategries(cateory))
});

function renderCategries(category){
    const categoryContainer = document.querySelector("#category-container");
    
    const tile = document.createElement("div");
    tile.className = "tile";

    const categoryName = document.createElement("p");
    categoryName.innerText = category;
    
    tile.appendChild(categoryName);
    categoryContainer.appendChild(tile);
}

function createTiles(question) {
    const board = document.querySelector("#jeopardy-board");

    const tile = document.createElement("div");
    tile.className = "tile";

    const value = document.createElement("p");
    value.className = "value";
    value.innerText = "$" + question.value;

    value.addEventListener("click", () => {
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






