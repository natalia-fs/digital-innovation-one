$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 16,
  nav: false,
  touchDrag: true,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})