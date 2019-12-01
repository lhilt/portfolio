
highlightActive = (e) => {
  $('.nav-link').removeClass('active');
  $(e.target).addClass('active');
};

$('.nav-link').on('click', highlightActive);
