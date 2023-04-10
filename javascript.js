// function addBackgroundImage {
//     document.body.style.backgroundImage = "url('compass.jpg')";
// }
function scaleUpPOL(){
    var itemToScale = document.getElementById('projectOneLine');
    itemToScale.style.transform = 'scale(1.1)';
}

function scaleDwnPOL(){
    var itemToScale = document.getElementById('projectOneLine');
    itemToScale.style.transform = 'scale(1)';
}

function scaleUpPTL(){
    var itemToScale = document.getElementById('projectTwoLine');
    itemToScale.style.transform = 'scale(1.1)';
}

function scaleDwnPTL(){
    var itemToScale = document.getElementById('projectTwoLine');
    itemToScale.style.transform = 'scale(1)';
}

function scaleUpPThreeL(){
    var itemToScale = document.getElementById('projectThreeLine');
    itemToScale.style.transform = 'scale(1.1)';
}

function scaleDwnPThreeL(){
    var itemToScale = document.getElementById('projectThreeLine');
    itemToScale.style.transform = 'scale(1)';
}



const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://script.google.com/macros/s/1XTaVdkdAnzhAHoLOA-x0K4svtJOB9RUnp2OgudFCNoEE4Lo8muDKOgSO/exec'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})