import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import $ from "jquery";
import "slick-carousel";



$(".carousel__container").slick({
	arrows: false,
	dots: true,
	infinite: true,
});



$(".story__container").slick({
	arrows: false,
	dots: true,
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
});

$(".home__container").slick({
	arrows: false,
	dots: true,
	infinite: true,
	/*slidesToShow: 3,
	slidesToScroll: 3*/
});


$('.menu').on('click', function () {
	$('.header-menu__items').toggleClass('header-menu__items--active')
});


document.getElementById('go_to_about').onclick = function (event) {
	window.location.href = 'http://localhost:3000/about.html';
};

document.getElementById('go_to_services').onclick = function (event) {
	window.location.href = 'http://localhost:3000/services.html';
};

document.getElementById('go_to_gallery').onclick = function (event) {
	window.location.href = 'http://localhost:3000/gallery.html';
};

document.getElementById('go_to_contact').onclick = function (event) {
	window.location.href = 'http://localhost:3000/contact.html';
};

document.getElementById('go_to_story').onclick = function (event) {
	window.location.href = 'http://localhost:3000/story.html';
};

document.getElementById('go_to_career').onclick = function (event) {
	window.location.href = 'http://localhost:3000/career.html';
};

document.getElementById('go_to_news').onclick = function (event) {
	window.location.href = 'http://localhost:3000/news.html';
};
 