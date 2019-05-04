 const donors = []
 const testing = (e) => {
   e.preventDefault()
   console.log('hello')
   console.log(document.getElementById('firstname').value)
   let firstName = document.getElementById('firstname').value
   let lastName = document.getElementById('lastname').value
   let email = document.getElementById('email').value
   let group = document.getElementById('org').value
   let city = document.getElementById('city').value
   let zip = document.getElementById('zip').value
   
   let obj = {
     first: firstName,
     last: lastName,
     email: email,
     org: group,
     city: city,
     zip: zip
   }
   donors.push(obj)
   console.log(obj)
   document.getElementById('donorForm').reset();
   listDonors();
   
 }
 const listDonors = () => {
   let current = donors[donors.length-1]
   let textVal = document.createElement('li');
   textVal.innerHTML = current.first + ' ' + current.last + ' Email: ' + current.email + ' Group: ' + current.org + ' Location: ' + current.city + ' Zip: ' + current.zip
   document.getElementById('donorList').appendChild(textVal)
   console.log(donors) 
 }
 document.getElementById('submit').addEventListener('click', testing)
