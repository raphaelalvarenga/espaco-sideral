function loadStars() {
	const main = document.querySelector("main");

	const star = document.createElement("div");
	star.setAttribute("class", "stars");

	const top = Math.floor(Math.random() * innerHeight);
	const left = Math.floor(Math.random() * innerWidth);

	star.style.top = `${top}px`;
	star.style.left = `${left}px`;

	main.appendChild(star);
}
