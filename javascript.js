// animation into object array!!!!
//  side menu class styling !!!!
const p = console.log;

const createTag = (tagName, className) => {
	const el = document.createElement(tagName);
	el.classList.add(className);

	return el;
};

const images = [];
const imageArrayMaker = (src) => {
	for (let i = 0; i < 16; i++) {
		src = `IMG_52${i + 35}.JPG`;
		images.push(src);
	}
	return images;
};
imageArrayMaker();

// THE SETUP
//*********
const mainContainer = document.querySelector(".container");

const sideBar = () => {
	const renderedButtons = createButtons();

	const btnHolder = createTag("div", "btn-holder");

	const chevUp = createTag("i", "fas");
	chevUp.classList.add("fa-chevron-up"); // TODO #3 @RCMiron help needed here.

	renderedButtons.forEach((item) => btnHolder.append(item));

	const chevDown = createTag("i", "fas");
	chevDown.classList.add("fa-chevron-down"); // TODO #2 @RCMiron and here.
	btnHolder.append(chevUp, chevDown);

	const imgContainer = createTag("div", "img-container");

	mainContainer.append(btnHolder, imgContainer);

	btnHolder.addEventListener("click", (e) => {
		if (e.target.classList.contains("fa-chevron-up")) {
			renderedButtons.forEach(
				(item) => (item.style.transform += "translateY(-100%)")
			);
		} else if (e.target.classList.contains("fa-chevron-down")) {
			renderedButtons.forEach(
				(item) => (item.style.transform += "translateY(100%)")
			);
		} else if (e.target.hasAttribute('src')) {
			imgContainer.innerHTML = "";
			let targetSrc = e.target.getAttribute("src");
			const image = document.createElement("img");
			image.setAttribute("src", targetSrc);
			imgContainer.append(image);
			p('id');
		} else {
			return;
		}
	});
};

const createButtons = () => images.map(createButton);

const createButton = (item, i) => {
	const img = document.createElement("img");
	img.src = `documentation/${item}`;
	img.alt = `img${i + 1}`;

	const button = document.createElement("button");
	button.id = `btn${i + 1}`;
	button.appendChild(img);

	return button;
};

sideBar();

// ********************************************************
{
	/* <h1 class="header-text"><span>JS animate width toggle</span></h1> */
}
const header = document.querySelector("header");

const createHeader = () => {
	const title = createTag("h1", "header-text");
	const titleSpan = createTag("span", undefined);
	titleSpan.innerHTML = "JS animate width toggle";
	title.append(titleSpan);
	header.append(title);
	window.addEventListener(
		"DOMContentLoaded",
		() => (titleSpan.style.transform = "translateY(0%)")
	);
	titleSpan.addEventListener("click", () => {
		const btnHolder = document.querySelector(".btn-holder");
		btnHolder.style.transform = "translateX(0%)";
	});
};
createHeader();
