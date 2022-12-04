const btn = document.querySelector(".btn");
const jokeGenerator = ()=>{
fetch("https://v2.jokeapi.dev/joke/Programming?type=single")
	.then((Response) => {
		return Response.json();
	})
	.then((data) => {
		var jokeVal = data.joke;
		var cont = document.querySelector(".joke");
		cont.innerHTML = jokeVal;
	});
}

// joke after clicking the button
btn.addEventListener("click",jokeGenerator);
jokeGenerator();