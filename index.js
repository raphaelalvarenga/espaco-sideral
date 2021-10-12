const totalStars = 1000;
const maxBlur = 40;
const minBlur = 15;
const standardSpread = 1;

function loadStars() {
	const main = document.querySelector("main");

	for (let x = 0; x < totalStars; x++) {
		const star = document.createElement("div");

		star.setAttribute("class", "stars");

		const top = Math.floor(Math.random() * innerHeight);
		const left = Math.floor(Math.random() * innerWidth);
		const sizes = Math.floor(Math.random() * (4 - 0) + 0);

		// const blur = Math.floor(Math.random() * (maxBlur - minBlur) + minBlur);
		const blur = minBlur;
		// const spread = Math.random() * (5 - 1) + 1;
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
	// setInterval(() => {
	// 	for (let x = 0; x < totalStars; x++) {
	// 		const star = document.getElementsByClassName("stars")[x];
	// 		// const interval = star.style.transition.split(" ")[1].split("")[0] * 1000;
	// 		const boxShadow = star.style.boxShadow;
	// 		const blur = parseInt(boxShadow.split(" ")[5].split("px")[0]);

	// 		star.style.boxShadow = `0px 0px ${
	// 			blur === 15 ? maxBlur : minBlur
	// 		}px 1px rgb(250, 250, 250)`;
	// 	}
	// }, 1000);

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
