const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id")

console.log(id)



const postContainer = document.querySelector(".post-container");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7fa2aa016msh1cd3a9b66b694a3p11980ejsnf2e4c69523b3',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
}

const baseUrl = "https://edamam-recipe-search.p.rapidapi.com/search?q=pasta" + id;

async function fetchPosts() {
    const response = await fetch(baseUrl, options);
    const results = await response.json();

    

    const posts = results.hits
     console.log(posts)

     postContainer.innerHTML = `<div>
                                    
                                    <h4>${results.recipe.label}</h4>
                                    <img src="${results.recipe.image}">
                                     </a>

                                     </div>`
                                
     
     
}

fetchPosts();