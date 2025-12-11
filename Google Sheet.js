const scriptURL = 'https://script.google.com/macros/s/AKfycbzFUwaJGsLC-GyDGWBP1GDs7_Fr6HGTJDdmtH5Znaz_BFPkrRgRe_Sn63e-3fXJL9TZ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Form submitted successfully! ✅" ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})
