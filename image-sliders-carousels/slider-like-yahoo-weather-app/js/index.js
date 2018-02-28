var slider = {

  // Not sure if keeping element collections like this
  // together is useful or not.
  el: {
    slider: $("#slider"),
    allSlides: $(".slide"),
    sliderNav: $(".slider-nav"),
    allNavButtons: $(".slider-nav > a"),
    sliderWrapper: $(".slider-wrap")
  },

  timing: 800,
  isPlaying: true,
  autoPlayInterval: 1500,
  slideChangeInterval: undefined,
  slideWidth: 300, // could measure this

  // In this simple example, might just move the
  // binding here to the init function
  init: function () {
    this.bindUIEvents();
  },

  bindUIEvents: function () {
    // You can either manually scroll...
    this.el.slider.on("scroll", function (event) {
      slider.moveSlidePosition(event);
    });
    // ... or click a thing
    this.el.sliderNav.on("click", "a", function (event) {
      slider.handleNavClick(event, this);
    });

    /* let playbtn = document.querySelector('#play');
    playbtn.addEventListener('click', () => {
      slider.playSlideShow();
    }) */

    this.el.sliderNav.on("click", "#play", (event) => {
      setInterval(() => {
        //slider.moveSlidePosition(event);
        slider.handleNavClick(event, this);
      }, 500);
      //slider.handleNavClick(event, this);
    });
    // What would be cool is if it had touch
    // events where you could swipe but it
    // also kinda snapped into place.
  },

  // Pause slideshow
  playSlideShow: function(event) {
    this.isPlaying = true;
    this.slideChangeInterval = setInterval(() => {
      //slider.moveSlidePosition(event);
      slider.handleNavClick(event, this);
    }, this.autoPlayInterval);
  },

  moveSlidePosition: function (event) {
    // Magic Numbers =(
    this.el.allSlides.css({
      "background-position": $(event.target).scrollLeft() / 6 - 100 + "px 0"
    });
  },

  handleNavClick: function (event, el) {
    event.preventDefault();
    var position = $(el).attr("href").split("-").pop();

    this.el.slider.animate({
      scrollLeft: position * this.slideWidth
    }, this.timing);

    this.changeActiveNav(el);
  },

  changeActiveNav: function (el) {
    this.el.allNavButtons.removeClass("active");
    $(el).addClass("active");
  }

};

slider.init();

// https://codepen.io/BaylorRae/pen/ImGBC
// Originally added click links, so I ported over and re-wrote
