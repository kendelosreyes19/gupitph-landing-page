// UNHIDE CONTENT AFTER LOAD

document.onreadystatechange = function () {
	if (document.readyState !== "complete") {
		document.querySelector(
			"body").style.visibility = "hidden";
		document.querySelector(
			"#loader").style.visibility = "visible";
	} else {
		document.querySelector(
			"#loader").style.display = "none";
		document.querySelector(
			"body").style.visibility = "visible";
	}
};

// FOR MOBILE AND TABLET TOGGLE

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
	}
});

// FOR IMAGE SWIPER

var swiper1 = new Swiper(".swiper1", {
	// Optional parameters
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination1",
		clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// FOR THE MAP

mapboxgl.accessToken =
	"pk.eyJ1Ijoia2VuZGVsb3NyZXllczE5IiwiYSI6ImNsNXVrNzRlcDAwa20zY3BnMGo4bmRhcWgifQ.MMWF2Dph5KHhi5ipoi4iqw";
const map = new mapboxgl.Map({
	container: "map", // container ID
	style: "mapbox://styles/mapbox/streets-v11", // style URL
	zoom: 13, // starting zoom
	center: [120.5724, 15.9709], // starting position
});

map.on("load", () => {
	// Load an image from an external URL.
	map.loadImage(
		"https://cdn-icons-png.flaticon.com/512/684/684908.png",
		(error, image) => {
			if (error) throw error;

			// Add the image to the map style.
			map.addImage("cat", image);

			// Add a data source containing one point feature.
			map.addSource("point", {
				type: "geojson",
				data: {
					type: "FeatureCollection",
					features: [{
						type: "Feature",
						geometry: {
							type: "Point",
							coordinates: [120.5724, 15.9709],
						},
					}, ],
				},
			});

			// Add a layer to use the image to represent the data.
			map.addLayer({
				id: "points",
				type: "symbol",
				source: "point", // reference the data source
				layout: {
					"icon-image": "cat", // reference the image
					"icon-size": 0.09,
				},
			});
		}
	);
});

// FOR THE COMMENTS BANNER SWIPER

window.addEventListener("scroll", function () {
	var MainHeader = document.querySelector(".header-container");
	MainHeader.classList.toggle("sticky", window.scrollY > 900);
});

var swiper2 = new Swiper(".swiper2", {
	// Optional parameters
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	loop: true,
	speed: 1000,
});