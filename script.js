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


 }
 
 const donorList = () => {
   let current = donors[donors.length-1];
   let listItem = document.createElement('li')
   let name = document.createElement('b');
   name.innerHTML = current.first + ' ' + current.last
   let textVal = document.createElement('p');
   textVal.innerHTML = 'Email: ' + current.email + ' Group: ' + current.org + ' Location: ' + current.city + ' Zip: ' + current.zip + ' Donoation Type: ' + current.type
   listItem.appendChild(name)
   listItem.appendChild(textVal)
   console.log(listItem)
   document.getElementById('donorList').appendChild(listItem)
  //  document.getElementById('donorList').appendChild(textVal)
  //  console.log(donors) 
 }
 document.getElementById('submit').addEventListener('click', testing)
