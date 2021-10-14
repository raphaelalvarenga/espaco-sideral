const main = document.querySelector("main");
const totalStars = innerWidth <= 375 ? 200 : innerWidth <= 768 ? 300 : 1000;
const maxBlur = 40;
const minBlur = 15;
const standardSpread = 1.3;

const shootingStar = document.createElement("div");
shootingStar.setAttribute("id", "shooting-star");
shootingStar.style.position = "absolute";
shootingStar.style.width = "4px";
shootingStar.style.height = "4px";
shootingStar.style.borderRadius = "2px";
shootingStar.style.background = "white";
shootingStar.style.transition = "0.5s";
shootingStar.style.boxShadow = "0px 0px 15px 5px white";
main.appendChild(shootingStar);

function loadStars() {
	for (let x = 0; x < totalStars; x++) {
		const star = document.createElement("div");

		star.setAttribute("class", "stars");

		const top = Math.floor(Math.random() * innerHeight);
		const left = Math.floor(Math.random() * innerWidth);
		const sizes = Math.floor(Math.random() * (4 - 0) + 0);
		const blur = minBlur;
		const spread = standardSpread;
		const borderRadius = sizes / 2;
		const transition = Math.ceil(Math.random() * 2);

		const randomBackgroundCondition = Math.floor(Math.random() * 10);
		const background =
			randomBackgroundCondition < 1
				? "rgb(250, 250, 50)"
				: "rgb(250, 250, 250)";

		star.style.top = `${top}px`;
		star.style.left = `${left}px`;
		star.style.width = `${sizes}px`;
		star.style.height = `${sizes}px`;
		star.style.boxShadow = `0px 0px ${blur}px ${spread}px ${background}`;
		star.style.borderRadius = `${borderRadius}px`;
		star.style.transition = `${transition}s`;
		star.style.background = background;

		main.appendChild(star);
	}
	animation();
}

function animation() {
	for (let x = 0; x < totalStars; x++) {
		const star = document.getElementsByClassName("stars")[x];
		const interval = star.style.transition.split(" ")[1].split("")[0] * 1000;
		const background = star.style.backgroundColor;

		setInterval(() => {
			const boxShadow = star.style.boxShadow;
			const blur = parseInt(boxShadow.split(" ")[5].split("px")[0]);

			star.style.boxShadow = `0px 0px ${
				blur === 15 ? maxBlur : minBlur
			}px ${standardSpread}px ${background}`;
		}, interval);
	}
}

function showShootingStar() {
	const initialTop = Math.floor(Math.random() * innerHeight);
	const initialLeft = Math.floor(Math.random() * innerWidth);

	const finalTop = Math.floor(Math.random() * innerHeight);
	const finalLeft = Math.floor(Math.random() * innerWidth);

	shootingStar.style.top = `${initialTop}px`;
	shootingStar.style.left = `${initialLeft}px`;
	shootingStar.style.opacity = 0;

	setTimeout(() => {
		shootingStar.style.opacity = 1;
		shootingStar.style.top = `${finalTop}px`;
		shootingStar.style.left = `${finalLeft}px`;

		setTimeout(() => {
			shootingStar.style.opacity = 0;
		}, 400);
	}, 1000);
}

showShootingStar();

setInterval(() => showShootingStar(), 5000);
