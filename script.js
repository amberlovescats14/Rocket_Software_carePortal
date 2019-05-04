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
  type: 'Money'
},
{
  first: 'Keith',
  last: 'Hym',
  email: 'keith@voo.com',
  org: 'Cowboy Church',
  city: 'Arp',
  zip: '78787',
  type: 'Services'
},
{
  first: 'Jane',
  last: 'Fish',
  email: 'jfish@woo.com',
  org: 'Clintwood Church',
  city: 'Clintwood',
  zip: '57832',
  type: 'Items'
  },
{
  first: 'Mary',
  last: 'Hym',
  email: 'maryH@voo.com',
  org: 'Blessed Bay Church',
  city: 'San Francisco',
  zip: '23241',
  type: 'Food'
},
{
  first: 'Heather',
  last: 'Barr',
  email: 'hnbarr@voo.com',
  org: 'Index Church',
  city: 'Arp',
  zip: '75750',
  type: 'Services'
},
{
  first: 'Amber',
  last: 'Johnson',
  email: 'ajax@voo.com',
  org: 'Sass Church',
  city: 'San Antonio',
  zip: '78247',
  type: 'Food'
},
{
  first: 'Josh',
  last: 'Joll',
  email: 'jollj@voo.com',
  org: 'Json Church',
  city: 'Austin',
  zip: '78745',
  type: 'Items'
},
{
  first: 'Jonny',
  last: 'Abowd',
  email: 'jabowd@voo.com',
  org: 'Styl Church',
  city: 'Killen',
  zip: '78665',
  type: 'Services'
},
{
  first: 'Emilio',
  last: 'Sanchez',
  email: 'esanchez@voo.com',
  org: 'JS Church',
  city: 'Pfluggerville',
  zip: '78223',
  type: 'Money'
},
];
const testing = (e) => {
  //  validateForm()
  //  e.preventDefault()
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
     }
    
   })

 }
 document.getElementById('submit').addEventListener('click', testing)