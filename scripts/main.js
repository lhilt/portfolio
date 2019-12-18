
const home = 0;
const nav = $('#nav-bar').outerHeight(true);
const about = $('#about').offset().top - nav;
const skills = $('#skills').offset().top - nav;
const projects = $('#projects').offset().top - nav;

// source: https://stackoverflow.com/questions/3898130/check-if-a-user-has-scrolled-to-the-bottom#3898152
highlightOnScroll = () => {
  const position = $(window).scrollTop();

  if (position >= home && position < about) {
    highlightActive('.nav-link[href="#home"]');
  } else if (position >= about && position < skills) {
    highlightActive('.nav-link[href="#about"]');
  } else if (position >= skills && position < projects) {
    highlightActive('.nav-link[href="#skills"]');
  } else if (position >= projects) {
    const bottom = $(document).height();
    // if close to bottom of page, switch highlight to contact
    if (position + $(window).height() >= bottom - 100) {
      highlightActive('.nav-link[href="#contact"]');
    } else {
      highlightActive('.nav-link[href="#projects"]');
    }
  }
};

highlightActive = (element) => {
  $('.nav-link').removeClass('active');
  $(element).addClass('active');
};

// source: https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery#30905277
copyEmailToClipboard = () => {
  const email = 'lindsey.hiltner@gmail.com';
  const aux = document.createElement('input');
  aux.setAttribute('value', email);
  document.body.appendChild(aux);

  aux.select();
  document.execCommand('copy');
  document.removeChild(aux);
}

$('.nav-link').on('click', (e) => highlightActive(e.target));
$('#email').on('click', copyEmailToClipboard);
$(window).scroll(highlightOnScroll);
