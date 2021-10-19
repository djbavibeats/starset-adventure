const harp = new Audio('harp.wav');

document.querySelector('.vacationMode').addEventListener('click', function() {
    harp.play();
    document.getElementById('vacationMode').remove()
    document.getElementById('hud').style.display = 'none';
  })

  function openWebsite() {
    // window.open("https://starsetonline.com", '_blank').focus();
    window.location.href = "/studio";
  }

let glitch_one = document.querySelector('.glitch_one')
let glitch_two = document.querySelector('.glitch_two')

function glitch() {
    var min = 7,
    max = 15;
    var rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 5 - 10
    console.log(rand % 2);
    if (rand % 2 === 0) {
      glitch_one.style.display = 'block';
      glitch_one.style.opacity = .2;
      glitch_one.play();
      setTimeout(function() {
        glitch_one.style.display = 'none'
      }, 500)
    } else {
      glitch_two.style.display = 'block';
      glitch_two.style.opacity = .2;
      glitch_two.play();
      setTimeout(function() {
        glitch_two.style.display = 'none'
      }, 5000)
    }
   
    setTimeout(glitch, rand * 1000);
}

glitch()
glitch_one.style.display = 'none';
glitch_two.style.display = 'none';


