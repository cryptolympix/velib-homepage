// Header bar navigation animations
(function () {
  var headerContainer = document.getElementById('header-container');
  var bannerContainer = document.getElementById('banners-container');
  var socialIcons = document.getElementsByClassName('social')[1];
  var logoRounded = document.getElementById('logo-rounded');
  var logo = document.getElementById('logo');

  document.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 28) {
      headerContainer.style.backgroundColor = 'white';
      headerContainer.style.boxShadow = '0 5px 2px -2px rgba(0, 0, 0, 0.22)';
      socialIcons.style.display = 'none';
      logoRounded.style.display = 'none';
      logo.style.display = 'block';
      if (window.outerWidth > 1024) {
        headerContainer.style.position = 'fixed';
        bannerContainer.style.marginTop = '75px';
      }
    } else {
      headerContainer.style.backgroundColor = 'transparent';
      headerContainer.style.boxShadow = 'none';
      socialIcons.style.display = 'flex';
      logoRounded.style.display = 'block';
      logo.style.display = 'none';
      if (window.innerWidth > 1024) {
        headerContainer.style.position = 'relative';
        bannerContainer.style.marginTop = '0px';
      }
    }
  });

  window.addEventListener('resize', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // Get width of the window excluding scrollbars
    var w = document.documentElement.clientWidth;
    if (w < 1024) {
      headerContainer.style.position = 'relative';
    } else {
      headerContainer.style.position = scrollTop > 28 ? 'fixed' : 'relative';
    }
  });
})();
