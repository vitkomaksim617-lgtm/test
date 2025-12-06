const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu');

menuBtn.addEventListener('click', () => {
	menu.classList.toggle('menu--open')
});
/*------------------------slider-------------------------*/
const slider = document.getElementById("slider");
const cards = [...document.querySelectorAll(".card")];
const pagination = document.getElementById("pagination");

const cardsPerPage = 6;
const totalPages = Math.ceil(cards.length / cardsPerPage);

let currentPage = 0;


for (let i = 0; i < totalPages; i++) {
	const page = document.createElement("div");
	page.classList.add("slide-page");

	const start = i * cardsPerPage;
	const end = start + cardsPerPage;

	cards.slice(start, end).forEach(card => page.appendChild(card));

	if (i === 0) page.classList.add("active");

	slider.appendChild(page);
}


function renderPagination() {
	pagination.innerHTML = "";

	const maxVisible = 5;


	for (let i = 0; i < Math.min(maxVisible, totalPages); i++) {
		const btn = document.createElement("button");
		btn.textContent = i + 1;

		if (i === currentPage) btn.classList.add("active");

		btn.addEventListener("click", () => goToPage(i));
		pagination.appendChild(btn);
	}


	if (totalPages > maxVisible) {
		const dots = document.createElement("button");
		dots.textContent = "...";
		dots.classList.add("dots");
		dots.disabled = true;
		pagination.appendChild(dots);
	}


	const arrow = document.createElement("button");
	arrow.classList.add("arrow");
	arrow.textContent = "❯";
	arrow.addEventListener("click", () => {
		let next = currentPage + 1;
		if (next >= totalPages) next = 0;
		goToPage(next);
	});

	pagination.appendChild(arrow);
}

function goToPage(index) {
	document.querySelector(".slide-page.active")?.classList.remove("active");
	slider.children[index].classList.add("active");
	currentPage = index;
	renderPagination();
}

renderPagination();
