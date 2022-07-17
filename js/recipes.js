const postContainer = document.querySelector(".post-container");
const searchButton = document.querySelector(".search-button");



const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7fa2aa016msh1cd3a9b66b694a3p11980ejsnf2e4c69523b3',
		'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
	}
};


searchButton.onclick = function() {
    const searchInput = document.querySelector("#search-input").value
    const allergens = document.querySelector("#allergens").value
    const extraIngredients = document.querySelector("#extra-ingredients").value

    const api = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${searchInput}&intolerances=${allergens}&includeIngredients=${extraIngredients}&instructionsRequired=true&fillIngredients=false&addRecipeInformation=true&ignorePantry=true&sort=healthiness&sortDirection=asc&number=50`


    async function fetchPosts() {
        
        const response = await fetch(api, options);
        const result = await response.json(); 
        
        console.log(result)

        postContainer.innerHTML += ``

        result.results.forEach(function(recipe){
        postContainer.innerHTML += `<div class="card"> 
                                        <a href="recipespesific.html?id=${recipe.id}" class="nav-other">${recipe.id}</a>

                                        <h3>${recipe.title}</h3>
                                        <img src="${recipe.image}">                                      
                                    </div>
                                    `

    })
    }

    fetchPosts(api);
}

