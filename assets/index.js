const circlesPoints = document.querySelectorAll(".circle");
const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const progressBar = document.querySelector("#progress");

let currentPoint = 0;
let currentWidth = 0;

const moveToNextPoint = () => {
	if (currentPoint < circlesPoints.length - 1) {
		currentPoint++;
		circlesPoints[currentPoint].classList.add("active");
		currentWidth += 33;
		progressBar.style.width = currentWidth + "%";
		prevBtn.disabled = false;
	}
};

const moveToPreviousPoint = () => {
	if (currentPoint !== 0) {
		circlesPoints[currentPoint].classList.remove("active");
		currentPoint--;
		currentWidth -= 33;
		progressBar.style.width = currentWidth + "%";
		if (currentPoint === 0) {
			prevBtn.disabled = true;
		}
	}
};

nextBtn.addEventListener("click", moveToNextPoint);
prevBtn.addEventListener("click", moveToPreviousPoint);
