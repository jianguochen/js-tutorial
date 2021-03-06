/**
 * Javascript Tutorial for Slide Show.

 @param {string} containerSelector Query Selector for the container.
 */
function SlideShow(containerSelector) {
	this.container = document.querySelector(containerSelector);
	this.imgs = this.container.querySelectorAll("img");
	this.currentSlide = 1;
	this.totalSlides = this.imgs.length;
};

SlideShow.prototype.initNav = function() {
	var leftDiv = document.createElement("div");
	leftDiv.classList.add("slideshow-nav");
	leftDiv.innerHTML = "<-";
	leftDiv.setAttribute("style", "left: 0%");
	this.container.appendChild(leftDiv);

	var rightDiv = document.createElement("div");
	rightDiv.classList.add("slideshow-nav");
	rightDiv.innerHTML = "->";
	rightDiv.setAttribute("style", "right: 0%;");
	this.container.appendChild(rightDiv);

	// Closure here is needed to store the original SlideShow object.
	var that = this;
	leftDiv.onclick = function() {
		that.show(-1)
	}
	rightDiv.onclick = function() {
		that.show(1);
	}
};

SlideShow.prototype.show = function(delta) {
	this.currentSlide += delta;
	if (this.currentSlide > this.totalSlides) {
		this.currentSlide = 1;
	}
	if (this.currentSlide < 1) {
		this.currentSlide = this.totalSlides;
	}	
	this.imgs.forEach(function(img) {
		img.style.display = "none";
	});
	this.imgs[this.currentSlide - 1].style.display = "block";
};