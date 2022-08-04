// Loader

let spinnerWrapper = document.querySelector('.spinner-wrapper');

window.addEventListener('load', function () {
	spinnerWrapper.parentElement.removeChild(spinnerWrapper);
});

(function () {
	function onReady() {
		document.body.classList.remove('no-scroll');
	}

	if (document.readyState === 'complete') {
		onReady();
	} else {
		document.addEventListener('DOMContentLoaded', onReady);
	}
})();

// Tablet and Phone Navigation

const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

	const visibility = primaryNav.getAttribute("data-visible");

	if (visibility === "false") {
		primaryNav.setAttribute("data-visible", true);
		navToggle.setAttribute("aria-expanded", true);
	} else {
		primaryNav.setAttribute("data-visible", false);
		navToggle.setAttribute("aria-expanded", false);
	};
});

// Image Swiper 

var swiper1 = new Swiper(".swiper1", {

	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,

	pagination: {
		el: ".swiper-pagination1",
		clickable: true,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// Mapbox Map

mapboxgl.accessToken = 'pk.eyJ1Ijoia2VuZGVsb3NyZXllczE5IiwiYSI6ImNsNXVrNzRlcDAwa20zY3BnMGo4bmRhcWgifQ.MMWF2Dph5KHhi5ipoi4iqw';
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	zoom: 13,
	center: [120.5724, 15.9709]
});

map.on('load', () => {

	map.loadImage(
		'https://cdn-icons-png.flaticon.com/512/684/684908.png',
		(error, image) => {
			if (error) throw error;

			map.addImage('cat', image);

			map.addSource('point', {
				'type': 'geojson',
				'data': {
					'type': 'FeatureCollection',
					'features': [{
						'type': 'Feature',
						'geometry': {
							'type': 'Point',
							'coordinates': [120.5724, 15.9709]
						}
					}]
				}
			});

			map.addLayer({
				'id': 'points',
				'type': 'symbol',
				'source': 'point',
				'layout': {
					'icon-image': 'cat',
					'icon-size': 0.09
				}
			});
		}
	);
});

// Header Animation

window.addEventListener("scroll", function () {

	var MainHeader = document.querySelector(".header-container");
	MainHeader.classList.toggle("sticky", window.scrollY > 2500)

});

// Swiper for Banner

var swiper2 = new Swiper(".swiper2", {
	// Optional parameters
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,
	speed: 1000,
});