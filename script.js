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
  type: 'Money',
  details: '$500'
},
{
  first: 'Keith',
  last: 'Hym',
  email: 'keith@voo.com',
  org: 'Cowboy Church',
  city: 'Arp',
  zip: '78787',
  type: 'Services',
  details: 'Roofing'
},
{
  first: 'Jane',
  last: 'Fish',
  email: 'jfish@woo.com',
  org: 'Clintwood Church',
  city: 'Clintwood',
  zip: '57832',
  type: 'Items',
  details: 'Bed, Dresser'
  },
{
  first: 'Mary',
  last: 'Hym',
  email: 'maryH@voo.com',
  org: 'Blessed Bay Church',
  city: 'San Francisco',
  zip: '23241',
  type: 'Food',
  details: 'pasta for up to 5 people'
},
{
  first: 'Heather',
  last: 'Barr',
  email: 'hnbarr@voo.com',
  org: 'Index Church',
  city: 'Arp',
  zip: '75750',
  type: 'Services',
  details: 'woodworking, minor construction'
},
{
  first: 'Amber',
  last: 'Johnson',
  email: 'ajax@voo.com',
  org: 'Sass Church',
  city: 'San Antonio',
  zip: '78247',
  type: 'Food',
  details: 'canned goods'
},
{
  first: 'Josh',
  last: 'Joll',
  email: 'jollj@voo.com',
  org: 'Json Church',
  city: 'Austin',
  zip: '78745',
  type: 'Items',
  details: 'fridge'
},
{
  first: 'Jonny',
  last: 'Abowd',
  email: 'jabowd@voo.com',
  org: 'Styl Church',
  city: 'Killen',
  zip: '78665',
  type: 'Other',
  details: 'time to help run errands, baby-sitting'
},
{
  first: 'Emilio',
  last: 'Sanchez',
  email: 'esanchez@voo.com',
  org: 'JS Church',
  city: 'Pfluggerville',
  zip: '78223',
  type: 'Money',
  details: '$1,000'
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
   let details = document.getElementById('details').value
   console.log(details)

   if(firstName && lastName && email && group && city && zip && type && details){
     let obj = {
      first: firstName,
      last: lastName,
      email: email,
      org: group,
      city: city,
      zip: zip,
      type: type,
      details: details
    }
    donors.unshift(obj)
    document.getElementById('donorForm').reset();
    donorList();
   }
 }
 const donorList = () => {
   document.getElementById('donorList').innerHTML = ' ';
   let searchCondition = document.getElementById('bar').value
   let typeOfDonors = document.getElementById('typeSelect').value
  //  console.log(searchCondition,"asdf")
   donors.map((item) => {
    //  console.log(item.type + ' ' + typeOfDonors)
     let bool = false;
     
    //  if(typeOfDonors === 'all' ||true){
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
      // console.log('name', name)
      let emailVal = document.createElement('li');
      let orgVal = document.createElement('li');
      let cityVal = document.createElement('li');
      let zipVal = document.createElement('li');
      let typVal = document.createElement('li');
      let detailVal = document.createElement('li');

      //setting emails
      let a = document.createElement('a');
      var linkText = document.createTextNode("Email: "+item.email)
      a.appendChild(linkText);
      a.title = 'Email: ';
      a.href = item.email
      a.setAttribute("id", 'emailVal');
      // let r = donors.indexOf(item)
      // console.log(a, document.getElementById(`emailVal${donors.indexOf(item)}`), `emailVal${r}`)
      a.setAttribute("href", "mailto:"+item.email);
      a.setAttribute("target", "_blank")

      //end email
      // emailVal.innerHTML = 'Email: ' + item.email
      // emailVal.setAttribute( "id", "emailVal")
      orgVal.innerHTML = ' Group: ' + item.org
      orgVal.setAttribute( "id", 'orgVal')
      // console.log(orgVal.getAttribute('id'),'sd')
      cityVal.innerHTML = ' Location: ' + item.city
      cityVal.setAttribute( "id", "cityVal")
      zipVal.innerHTML = ' Zip: ' + item.zip
      zipVal.setAttribute( "id", "zipVal")
      typVal.innerHTML = ' Donation Type: ' + item.type
      typVal.setAttribute( "id", "typVal")
      detailVal.innerHTML = `Details: ${item.details}`
      detailVal.setAttribute('id', 'detailContent')
      listItem.appendChild(name)
      listItem.appendChild(typVal)
      listItem.appendChild(typVal)
      listItem.appendChild(a);
      listItem.appendChild(emailVal)
      listItem.appendChild(orgVal)
      listItem.appendChild(cityVal)
      listItem.appendChild(zipVal)
      listItem.appendChild(detailVal)
      // console.log(detailVal)

      listItem.appendChild(removeButton)
      listItem.appendChild(editButton)
      document.getElementById('donorList').appendChild(listItem);

      $(`#${donors.indexOf(item)}`).each(function(){
        // console.log(item.first + ' '+ index + ": " + $(this).text())
        console.log($(this).text().toLowerCase())
        if($(this).text().toLowerCase().includes(searchCondition.toLowerCase())){
          bool = true;
        }
      })
      // console.log("Bool", bool)
      if(!bool || typeOfDonors !== item.type && typeOfDonors !== 'all'){
        document.getElementById('donorList').removeChild(listItem);
        // document.getElementById('bar').value = ''
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
  // console.log("button", e.target.parentNode.id)
  let targetId = e.target.parentNode.id
  let blah = document.getElementById(targetId)
  if(blah.contentEditable === 'true'){
    e.target.innerHTML = 'Edit'
    blah.setAttribute('contenteditable', 'false')
    let nameArr =document.getElementById(targetId).childNodes[0].textContent.split(' ')
    donors[targetId].first = nameArr[0]
    donors[targetId].last = nameArr[1]
    donors[targetId].type = document.getElementById(targetId).childNodes[1].textContent.split(':')[1].trim()
    donors[targetId].email = document.getElementById(targetId).childNodes[2].textContent.split(':')[1].trim()
    donors[targetId].org = document.getElementById(targetId).childNodes[4].textContent.split(':')[1].trim()
    donors[targetId].city = document.getElementById(targetId).childNodes[5].textContent.split(':')[1].trim()
    donors[targetId].zip = document.getElementById(targetId).childNodes[6].textContent.split(':')[1].trim()
    donors[targetId].details = document.getElementById(targetId).childNodes[7].textContent.split(':')[1].trim()
    // document.getElementById(targetId).childNodes[6].setAttribute('value', `${donors[targetId].type}`)
    // console.log(donors[targetId].type.trim())
    // console.log(donors[targetId])
    // console.log(donors[targetId].zip)
    console.log(donors[targetId])
    
  }else{
    e.target.innerHTML = 'Save'
    blah.setAttribute('contenteditable', 'true')
  }
 }
 document.getElementById('submit').addEventListener('click', testing)
//  document.getElementById('submit').addEventListener('click', testing)
const search = (e) => {
 let reg = new RegExp(/\d{5}/g);

 let value = document.getElementById('s').value
//  console.log(value)
 let zipcode = reg.test(value)
 donors.map((item) => {
  //  console.log(item)
   if(value == item ){
    //  console.log(item)
   }
 })
}