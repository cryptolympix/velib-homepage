// Header language dropdown menu animations
(function () {
  var langDropdownList = document.getElementsByClassName('lang-dropdown-list')[1];
  var langDropdownContent = document.getElementsByClassName('lang-dropdown-content')[1];
  var arrow = document.getElementsByClassName('dropdown-arrow')[1];

  langDropdownList.addEventListener('click', function () {
    langDropdownContent.style.display =
      langDropdownContent.style.display === 'block' ? 'none' : 'block';
    arrow.style.transform =
      arrow.style.transform === 'rotate(180deg)' ? 'none' : 'rotate(180deg)';
  });
})();

// Dropdown menu navigation
(function () {
  // Elements
  var hamburgerLink = document.getElementsByClassName('hamburger-link')[0];
  var dropdownMenu = document.getElementById('dropdown-menu');
  var cross = document.getElementsByClassName('cross-close')[0];
  var langDropdownList = document.getElementsByClassName('lang-dropdown-list')[0];
  var langDropdownContent = document.getElementsByClassName('lang-dropdown-content')[0];
  var arrow = document.getElementsByClassName('dropdown-arrow')[0];

  var menuHeight = 765;

  var animationOptions = {
    easing: 'ease',
    duration: 300, // ms
    iterations: 1,
    fill: 'forwards',
  };

  var slideInKeyframes = [
    { transform: `translateY(-${menuHeight}px)` },
    { transform: 'translateY(0px)' },
  ];

  var slideOutKeyframes = [
    { transform: 'translateY(0px)' },
    { transform: `translateY(-${menuHeight}px)`, display: 'none' },
  ];

  hamburgerLink.addEventListener('click', function () {
    dropdownMenu.style.display = 'block';
    dropdownMenu.animate(slideInKeyframes, animationOptions);
  });

  cross.addEventListener('click', function () {
    dropdownMenu.animate(slideOutKeyframes, animationOptions);
  });

  langDropdownList.addEventListener('click', function () {
    langDropdownContent.style.display =
      langDropdownContent.style.display === 'block' ? 'none' : 'block';
    arrow.style.transform =
      arrow.style.transform === 'rotate(180deg)' ? 'none' : 'rotate(180deg)';
  });
})();
