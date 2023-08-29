const hamburger = document.querySelector(".hamburger");
const list1 = document.querySelector(".list1");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	list1.classList.toggle("active");
})

document.querySelectorAll(".link").forEach(n=> n.
addEventListener("click", () => {
	hamburger.classList.remove("active");
	list1.classList.remove("active");
}))