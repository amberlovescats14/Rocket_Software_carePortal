 const donors = [];
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
<<<<<<< HEAD
  //  donors.push(obj)
  console.log(obj)
   donorList(obj);

=======
   donors.push(obj)
   console.log(obj)
   document.getElementById('donorForm').reset();
   donorList();
   
>>>>>>> bd7d3fee3da822dc2a0e535784dbd844142469c8
 }
//  const validateForm = () => {
//   let x = document.forms["add_new_donor"]["firstname"].value;

//   if(x == ''){
//     alert("First Name is Required!")
//   }
<<<<<<< HEAD

//  }
 const donorList = (obj) => {
=======
  
//  } 
 const donorList = () => {
   let current = donors[donors.length-1];
>>>>>>> bd7d3fee3da822dc2a0e535784dbd844142469c8
   let textVal = document.createElement('li');
   textVal.innerHTML = current.first + ' ' + current.last + ' Email: ' + current.email + ' Group: ' + current.org + ' Location: ' + current.city + ' Zip: ' + current.zip
   document.getElementById('donorList').appendChild(textVal)
   console.log(donors) 
 }
 document.getElementById('submit').addEventListener('click', testing)
