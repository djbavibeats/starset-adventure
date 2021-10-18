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