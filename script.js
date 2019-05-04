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
   let typeOfDonors = document.getElementById('typeSelect').value
   donors.map((item) => {
     console.log(item.type + ' ' + typeOfDonors)
     if(typeOfDonors === 'all' || typeOfDonors === item.type){
      let listItem = document.createElement('ul')
      let name = document.createElement('li');
      name.innerHTML = item.first + ' ' + item.last
      name.setAttribute( "id", "name")
      console.log('name', name)
      let emailVal = document.createElement('li');
      let orgVal = document.createElement('li');
      let cityVal = document.createElement('li');
      let zipVal = document.createElement('li');
      let typVal = document.createElement('li');
      emailVal.innerHTML = 'Email: ' + item.email
      emailVal.setAttribute( "id", "emailVal")
      orgVal.innerHTML = ' Group: ' + item.org
      orgVal.setAttribute( "id", "orgVal")
      cityVal.innerHTML = ' Location: ' + item.city
      cityVal.setAttribute( "id", "cityVal")
      zipVal.innerHTML = ' Zip: ' + item.zip
      zipVal.setAttribute( "id", "zipVal")
      typVal.innerHTML = ' Donation Type: ' + item.type
      typVal.setAttribute( "id", "typVal")
      listItem.appendChild(name)
      listItem.appendChild(emailVal)
      listItem.appendChild(orgVal)
      listItem.appendChild(cityVal)
      listItem.appendChild(zipVal)
      listItem.appendChild(typVal)
      console.log(listItem)
      document.getElementById('donorList').appendChild(listItem)
     }

   })

 }
 document.getElementById('submit').addEventListener('click', testing)
