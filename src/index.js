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

        toggleHideAllTiles();
        toggleHideCategories();

        const prompt = document.createElement("p");
        prompt.innerText = question.question;

        prompt.addEventListener("click", () => {
            prompt.remove();

            const answer = document.createElement("p");
            answer.innerText = question.answer;
            tile.appendChild(answer);
        })
        tile.appendChild(prompt);
        toggleTile(tile)
        tile.className = "fill-board"
    })

    tile.appendChild(value);
    board.appendChild(tile);
}


function toggleHideAllTiles(){
    const boardTiles = document.querySelector("#jeopardy-board").children;
    for(let i = 0; i < boardTiles.length; i++){
        toggleTile(boardTiles[i])
    }
}

function toggleTile(tile){
    if(tile.style.display === ""){
        tile.style.display = "none";
    } else {
        tile.style.display = "";
    }
}

function toggleHideCategories(){
    const categoryContainer = document.querySelector("#category-container");
    if (categoryContainer.style.display === ""){
        categoryContainer.style.display = "none";
    } else {
        categoryContainer.style.display = "";
    }
}



