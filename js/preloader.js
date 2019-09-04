var myVar;

function toLoading() {
  myVar = setTimeout(showPage, 4000);
}

function showPage() {
  document.getElementById('preloader').style.display = 'none';
  document.getElementById('home').style.display = 'block';
}