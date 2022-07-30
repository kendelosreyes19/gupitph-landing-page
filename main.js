const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

mapboxgl.accessToken = 'pk.eyJ1Ijoia2VuZGVsb3NyZXllczE5IiwiYSI6ImNsNXVrNzRlcDAwa20zY3BnMGo4bmRhcWgifQ.MMWF2Dph5KHhi5ipoi4iqw';
  const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      zoom: 13, // starting zoom
      center: [120.5724, 15.9709] // starting position
  });

  map.on('load', () => {
      // Load an image from an external URL.
      map.loadImage(
          'https://cdn-icons-png.flaticon.com/512/684/684908.png',
          (error, image) => {
              if (error) throw error;

              // Add the image to the map style.
              map.addImage('cat', image);

              // Add a data source containing one point feature.
              map.addSource('point', {
                  'type': 'geojson',
                  'data': {
                      'type': 'FeatureCollection',
                      'features': [
                          {
                              'type': 'Feature',
                              'geometry': {
                                  'type': 'Point',
                                  'coordinates': [120.5724, 15.9709]
                              }
                          }
                      ]
                  }
              });

              // Add a layer to use the image to represent the data.
              map.addLayer({
                  'id': 'points',
                  'type': 'symbol',
                  'source': 'point', // reference the data source
                  'layout': {
                      'icon-image': 'cat', // reference the image
                      'icon-size': 0.09
                  }
              });
          }
      );
  });

  window.addEventListener("scroll", function(){

    var MainHeader = document.querySelector(".header-container")
    ;
    MainHeader.classList.toggle("sticky", window.scrollY > 2600)
    
    var Branding = document.querySelector("#branding h2")
    ;
    Branding.classList.toggle("h2-black", window.scrollY > 2600)
  })


  $(document).ready(function() {
    //by Pixels
    let imgSpace = 2500;
    !imgSpace && imgSpace++;
  
    $(window).resize(function() {
      $("body").css(
        "height",
        $(window).height() + imgSpace * ($(".image").length - 1) + "px"
      );
    });
  
    $(window).trigger("resize");
  
    $("#c1").fadeIn(0);
  
    $(window).scroll(function() {
      var pos = $(document).scrollTop();
      console.log(pos);
      hideAll("c" + (Math.trunc(pos / imgSpace) + 1));
      $("#c" + (Math.trunc(pos / imgSpace) + 1)).fadeIn(0);
    });
  
    function hideAll(exceptMe) {
      $(".image").each(function(i) {
        if ($(this).attr("id") == exceptMe) return;
        $(this).fadeOut(0);
      });
    }
  });
  

  
  