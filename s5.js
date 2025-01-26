window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  let parallaxLayers = document.querySelectorAll('.parallax-layer');

  for (let i = 0; i < parallaxLayers.length; i++) {
    let parallaxLayer = parallaxLayers[i];
    let parallaxSpeed = parseFloat(parallaxLayer.getAttribute('data-speed'));
    let parallaxOffset = -(scrollTop * parallaxSpeed);

    parallaxLayer.style.transform = 'translate3d(0, ' + parallaxOffset + 'px, 0)';
  }
});
