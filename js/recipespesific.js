const recipeContainer = document.querySelector(".recipe-container");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id)

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7fa2aa016msh1cd3a9b66b694a3p11980ejsnf2e4c69523b3',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};


const api = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+id+"/information/"


async function fetchPosts() {
    const response = await fetch(api, options);
    const result = await response.json(); 
        
    console.log(result)
    createInfo(result)


};


fetchPosts(api);

function createInfo(result) {
    recipeContainer.innerHTML = `<div class="recipes">
                                <h3>${result.title}</h3>
                                <img src="${result.image}">
                                <p class="recipes-content">${result.instructions}</p>
                                </div>`
}

