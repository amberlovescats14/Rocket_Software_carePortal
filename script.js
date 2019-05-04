 const testing = (e) => {
  //  validateForm()
  //  e.preventDefault()
//    console.log('hello')
   console.log(document.getElementById('firstname').value)
   let firstName = document.getElementById('firstname').value
   let lastName = document.getElementById('lastname').value
   let email = document.getElementById('email').value
   let group = document.getElementById('org').value
   let type = document.getElementById('type').value
   let city = document.getElementById('city').value
   let zip = document.getElementById('zip').value

   let obj = {
     first: firstName,
     last: lastName,
     email: email,
     org: group,
     type: type,
     city: city,
     zip: zip
   }
  //  donors.push(obj)
  console.log(obj)
   donorList(obj);

 }
//  const validateForm = () => {
//   let x = document.forms["add_new_donor"]["firstname"].value;

//   if(x == ''){
//     alert("First Name is Required!")
//   }

//  }
 const donorList = (obj) => {
   let textVal = document.createElement('li');
   textVal.innerHTML = obj.first + ' ' + obj.last + ' ' + obj.email + ' ' + obj.org + ' ' + obj.city + ' ' + obj.zip
   document.getElementById('donorList').appendChild(textVal)

 }
 document.getElementById('submit').addEventListener('click', testing)
