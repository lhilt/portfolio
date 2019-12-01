
highlightActive = (e) => {
  $('.nav-link').removeClass('active');
  $(e.target).addClass('active');
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

$('.nav-link').on('click', highlightActive);
$('#email').on('click', copyEmailToClipboard);
