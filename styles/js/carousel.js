// Section 4 : Animation of the carousel
(function () {
  var slides = document.getElementsByClassName('slides')[0];
  var leftArrow = document.getElementsByClassName('arrow')[0];
  var rightArrow = document.getElementsByClassName('arrow')[1];

  var slideCount = slides.children.length; // Number of slides
  var activeSlideIndex = 0;
  var currentTransform = 0;
  var durationInterval = 7500; // in ms

  // Automatic slide animation
  var interval = setInterval(slideRight, durationInterval);

  /**
   * Reset the interval when the user click on the arrows
   */
  function resetInterval() {
    interval = setInterval(slideRight, durationInterval);
  }

  var animationOptions = {
    easing: 'ease',
    duration: 500, // ms
    iterations: 1,
    fill: 'forwards',
  };

  /**
   * Generic keyframe
   * @param {Number} from - a percentage (can be netative)
   * @param {Number} to - a percentage (can be netative)
   */
  function keyframe(from, to) {
    return [{ transform: `translateX(${from}%)` }, { transform: `translateX(${to}%)` }];
  }

  /**
   * Move to the left slide
   */
  function slideLeft() {
    activeSlideIndex--;
    var temp = currentTransform;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slideCount - 1;
      currentTransform = -100 + 100 / slideCount;
    } else {
      currentTransform += 100 / slideCount;
    }
    slides.animate(keyframe(temp, currentTransform), animationOptions);
  }

  /**
   * Move to the right slide
   */
  function slideRight() {
    activeSlideIndex++;
    var temp = currentTransform;
    if (activeSlideIndex > slideCount - 1) {
      activeSlideIndex = 0;
      currentTransform = 0;
    } else {
      currentTransform -= 100 / slideCount;
    }
    slides.animate(keyframe(temp, currentTransform), animationOptions);
  }

  leftArrow.addEventListener('click', function () {
    slideLeft();
    clearInterval(interval);
    resetInterval();
  });

  rightArrow.addEventListener('click', function () {
    slideRight();
    clearInterval(interval);
    resetInterval();
  });
})();
