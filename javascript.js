// animation into object array!!!!
//  side menu class styling !!!!

const images = [
	{ source: "/documentation/juc.jpg", id: "img1", btnid: "btn1" },
	{ source: "/documentation/juc1.jpg", id: "img2", btnid: "btn2" },
	{ source: "/documentation/juc2.jpg", id: "img3", btnid: "btn3" },
	{ source: "/documentation/juc3.jpg", id: "img4", btnid: "btn4" },
	{ source: "/documentation/IMG_4909.JPG", id: "img5", btnid: "btn5" },
	{ source: "/documentation/IMG_4910.JPG", id: "img6", btnid: "btn6" },
	{ source: "/documentation/IMG_4911.JPG", id: "img7", btnid: "btn7" },
];

// THE SETUP 
//*********
const mainContainer = document.querySelector(".container");

const renderButtons = () => {

	const renderedButtons = createButtons();

	const btnHolder = document.createElement("div");
	btnHolder.classList.add("btn-holder");
	
	const chevUp = document.createElement('i');
	chevUp.classList.add('fas','fa-chevron-up');
	btnHolder.prepend(chevUp);

	renderedButtons.forEach(item => btnHolder.append(item));
	
	const chevDown =document.createElement('i');
	chevDown.classList.add('fas','fa-chevron-down');
	btnHolder.append(chevDown);

	mainContainer.append(btnHolder);


	const imgContainer = document.createElement("div");
	imgContainer.classList.add("img-container");
	mainContainer.append(imgContainer);

};

const createButtons = () => images.map(createButton);

const createButton = item => {
	const img = document.createElement("img");
	img.setAttribute("src", item.source);
	img.setAttribute("alt", item.id);

	const button = document.createElement("button");
	button.setAttribute("id", item.btnid);
	button.appendChild(img);

	

	button.addEventListener("click", e => {
		const imgContainer = document.querySelector('.img-container');
		imgContainer.innerHTML = '';
		let target = e.target.getAttribute("src");
		const image = document.createElement("img");
		image.setAttribute("src", target);
		imgContainer.append(image);
		// console.log(target);
	});
	
	return button;
};

renderButtons();
console.log('javaScript is running');