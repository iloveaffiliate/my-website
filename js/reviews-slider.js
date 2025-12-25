console.log("JS FILE LOADED");
const viewport = document.querySelector(".reviews-viewport");

document.getElementById("next").onclick = () => {
  viewport.scrollBy({ left: viewport.clientWidth, behavior: "smooth" });
};

document.getElementById("prev").onclick = () => {
  viewport.scrollBy({ left: -viewport.clientWidth, behavior: "smooth" });
};


