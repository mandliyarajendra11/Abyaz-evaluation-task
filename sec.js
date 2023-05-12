const url= new URLSearchParams(window.location.search)
const val=url.get('val');
document.getElementById('head').innerText=val
