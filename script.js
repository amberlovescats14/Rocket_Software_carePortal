window.onload=function() {
  donorList();
}

 const donors = [{
  first: 'Jane',
  last: 'Doe',
  email: 'jdoe@woo.com',
  org: 'Mosaic',
  city: 'Austin',
  zip: '78727',
  type: 'money'
},

{
  first: 'Keith',
  last: 'Hym',
  email: 'keith@voo.com',
  org: 'Cowboy Church',
  city: 'Arp',
  zip: '78787',
  type: 'food'
},
{
  first: 'Jane',
  last: 'Fish',
  email: 'jfish@woo.com',
  org: 'Clintwood Church',
  city: 'Clintwood',
  zip: '57832',
  type: 'items'
  },

{
  first: 'Mary',
  last: 'Hym',
  email: 'maryH@voo.com',
  org: 'Blessed Bay Church',
  city: 'San Francisco',
  zip: '23241',
  type: 'food'
},];
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
   document.getElementById('donorList').innerHTML = ' ';
   donors.map((item) => {
      let listItem = document.createElement('li')
      let name = document.createElement('b');
      name.innerHTML = item.first + ' ' + item.last
      console.log('name', name)
      let textVal = document.createElement('p');
      textVal.innerHTML = 'Email: ' + item.email + ' Group: ' + item.org + ' Location: ' + item.city + ' Zip: ' + item.zip + ' Donoation Type: ' + item.type
      listItem.appendChild(name)
      listItem.appendChild(textVal)
      console.log(listItem)
      document.getElementById('donorList').appendChild(listItem)
   })
  //  let listItem = document.createElement('li')
  //  let name = document.createElement('b');
  //  name.innerHTML = current.first + ' ' + current.last
  //  let textVal = document.createElement('p');
  //  textVal.innerHTML = 'Email: ' + current.email + ' Group: ' + current.org + ' Location: ' + current.city + ' Zip: ' + current.zip + ' Donoation Type: ' + current.type
  //  listItem.appendChild(name)
  //  listItem.appendChild(textVal)
  //  console.log(listItem)
  //  document.getElementById('donorList').appendChild(listItem)
  //  document.getElementById('donorList').appendChild(textVal)
  //  console.log(donors) 
 }
 document.getElementById('submit').addEventListener('click', testing)