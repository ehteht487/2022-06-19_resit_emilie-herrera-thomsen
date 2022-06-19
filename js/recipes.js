const postContainer = document.querySelector(".post-container");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c7fa2aa016msh1cd3a9b66b694a3p11980ejsnf2e4c69523b3',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
}

const baseUrl = "https://edamam-recipe-search.p.rapidapi.com/search?q=pasta";

async function fetchPosts() {
    const response = await fetch(baseUrl, options);
    const results = await response.json();

    

    const posts = results.hits
     console.log(posts)
     
     posts.forEach(function(post) {
        postContainer.innerHTML += `<div>
                                    <a href="recipespesific.html?id=${post.recipe.ingredients}" class="product">
                                    <h4>${post.recipe.label}</h4>
                                    <img src="${post.recipe.image}">
                                    </a>

                                    </div>`

     })
}

fetchPosts();

const searchButton = document.querySelector(".search-button");

searchButton.onclick = function() {
    const searchInput = document.querySelector("#search").value;
    const newUrl = url + `?q=${searchInput}`;
    postContainer.innerHTML = "";
    fetchPosts(newUrl);    
}















