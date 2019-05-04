'use strict'
function readForms(){
  e.preventDefault();
  // console.log(document.getElementById('lastname'))
  console.log('something')
}
const form = document.getElementById('donorForm');
form.getElementById('submit').addEventListener("submit", readForms);
// .get('/addUser', function(req, res) {
//   res.render('addUser');
// });