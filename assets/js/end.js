// Set the date we're counting down to
var countDownDate = new Date("June 15, 2021 16:00:00 EST").getTime();

const secret = [
  "Create",
  "Rats",
  "Quark",
  "Ars Magica",
  "Tinker's Construct"
]

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//show on screen
  document.getElementById("d").innerHTML = days + " days" 
  document.getElementById("h").innerHTML = hours + " hours"
  document.getElementById("m").innerHTML = minutes + " minutes" 
  document.getElementById("s").innerHTML = seconds + " seconds"

  //display secrets

  if (Math.random() > 0.75) {
    const choice = secret[Math.floor(Math.random() * secret.length)]

    console.error(choice)
  }

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);S
    document.getElementById("d").innerHTML = ""
    document.getElementById("h").innerHTML = ""
    document.getElementById("m").innerHTML = ""
    document.getElementById("s").innerHTML = ""
  }
}, 1000);


if (localStorage.getItem("reloads") == undefined) {
  localStorage.setItem("reloads", "")
} else {
  localStorage.setItem("reloads", localStorage.getItem("reloads") + ".")

  if (localStorage.getItem("reloads").length > 15) {
    alert("Hey! You found me! Let Gucci know and he'll let you in on the secret!")
  }
}