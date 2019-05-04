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
     let obj = {
      first: firstName,
      last: lastName,
      email: email,
      org: group,
      city: city,
      zip: zip,
      type: type
    }
    donors.unshift(obj)
    document.getElementById('donorForm').reset();
    donorList();
   }
 }
 const donorList = () => {
   document.getElementById('donorList').innerHTML = ' ';
   let typeOfDonors = document.getElementById('typeSelect').value
   donors.map((item) => {
    //  console.log(item.type + ' ' + typeOfDonors)
     if(typeOfDonors === 'all' || typeOfDonors === item.type){
      let listItem = document.createElement('ul')
      listItem.setAttribute('id',`${donors.indexOf(item)}`)
      listItem.setAttribute('contenteditable', 'false')
      let name = document.createElement('li');
      name.innerHTML = item.first + ' ' + item.last
      let removeButton = document.createElement('button')
      removeButton.innerHTML = "Delete"
      removeButton.setAttribute('id', `${donors.indexOf(item)}`)
      removeButton.onclick = deleteItem
      let editButton = document.createElement('button')
      editButton.innerHTML = 'Edit'
      editButton.onclick = editItem
      name.setAttribute( "id", "name")
      console.log('name', name)
      let emailVal = document.createElement('li');
      let orgVal = document.createElement('li');
      let cityVal = document.createElement('li');
      let zipVal = document.createElement('li');
      let typVal = document.createElement('li');
      //setting emails
      let a = document.createElement('a');
      var linkText = document.createTextNode("Email: "+item.email)
      a.appendChild(linkText);
      a.title = 'Email: ';
      a.href = item.email
      a.setAttribute("id", "emailVal");
      a.setAttribute("href", "mailto:"+item.email);
      a.setAttribute("target", "_blank")

      //end email
      // emailVal.innerHTML = 'Email: ' + item.email
      // emailVal.setAttribute( "id", "emailVal")
      orgVal.innerHTML = ' Group: ' + item.org
      orgVal.setAttribute( "id", "orgVal")
      cityVal.innerHTML = ' Location: ' + item.city
      cityVal.setAttribute( "id", "cityVal")
      zipVal.innerHTML = ' Zip: ' + item.zip
      zipVal.setAttribute( "id", "zipVal")
      typVal.innerHTML = ' Donation Type: ' + item.type
      typVal.setAttribute( "id", "typVal")
      listItem.appendChild(name)
      listItem.appendChild(a);

      listItem.appendChild(emailVal)
      listItem.appendChild(orgVal)
      listItem.appendChild(cityVal)
      listItem.appendChild(zipVal)
      listItem.appendChild(typVal)
      listItem.appendChild(removeButton)
      listItem.appendChild(editButton)
      console.log(listItem)
      document.getElementById('donorList').appendChild(listItem)
     }

   })

 }
 const deleteItem = (e) => {
  //  e.target.parentNode.remove(e.target);
  //  console.log("button", e.target.parentNode)
   donors.splice(e.target.id, 1)
   donorList();
 }
 const editItem = (e) => {
  console.log("button", e.target.parentNode.id)
  let targetId = e.target.parentNode.id
  let blah = document.getElementById(targetId)
  if(blah.contentEditable === 'true'){
    e.target.innerHTML = 'Edit'
    blah.setAttribute('contenteditable', 'false')
    
  }else{
    e.target.innerHTML = 'Save'
    blah.setAttribute('contenteditable', 'true')
  }
  // console.log(typeof(blah.contentEditable))
  // blah.setAttribute('contenteditable', !blah.contentEditable)
  // console.log(blah.contentEditable)
 }
 document.getElementById('submit').addEventListener('click', testing)
//  document.getElementById('submit').addEventListener('click', testing)
