 const testing = (e) => {
   e.preventDefault()
   console.log('hello')
 }
 document.getElementById('submit').addEventListener('click', testing)