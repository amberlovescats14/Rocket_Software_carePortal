 const donors = [];
 const testing = (e) => {
  //  validateForm()
  //  e.preventDefault()
//    console.log('hello')
//    console.log(document.getElementById('firstname').value)
   let firstName = document.getElementById('firstname').value
   let lastName = document.getElementById('lastname').value
   let email = document.getElementById('email').value
   let group = document.getElementById('org').value
   let type = document.getElementById('donorType').value
   let city = document.getElementById('city').value
   let zip = document.getElementById('zip').value
   let type = document.getElementById('donorType').value
   if(firstName && lastName && email && group && city && zip && type){
     console.log('help im a computer')
     let obj = {
      first: firstName,
      last: lastName,
      email: email,
      org: group,
      city: city,
      zip: zip,
      type: type
    }
    donors.push(obj)
    document.getElementById('donorForm').reset();
    donorList();
   }
  //  console.log("dsd", type)
  //  console.log(obj)


 }
//  const validateForm = () => {
//   let x = document.forms["add_new_donor"]["firstname"].value;

//   if(x == ''){
//     alert("First Name is Required!")
//   }

//  }
 const donorList = () => {
   let current = donors[donors.length-1];
   let textVal = document.createElement('li');
   textVal.innerHTML = current.first + ' ' + current.last + ' Email: ' + current.email + ' Group: ' + current.org + ' Type: ' + current.type + ' Location: ' + current.city + ' Zip: ' + current.zip
   document.getElementById('donorList').appendChild(textVal)
  //  console.log(donors)
 }
 document.getElementById('submit').addEventListener('click', testing)
