const url= new URLSearchParams(window.location.search)
const val=url.get('val');
const loc=url.get('location');
const salary=url.get('salary')
document.getElementById('head').innerText=val
document.querySelector('.card-header').innerText=`  Location- ${loc} / Salary- ${salary}`