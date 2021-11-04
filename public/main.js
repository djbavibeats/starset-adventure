AFRAME.registerComponent('ios-video-fix', {
    init: function(){
      let el = this.el;
      el.addEventListener('materialvideoloadeddata', e => {
        el.setAttribute('material', 'shader', 'flat');
        e.detail.texture.flipY = true;
      })
    }
  });

  function openModal() {
    document.querySelector('.spotify-modal').style.display = 'block';
  }

  function closeModal() {
    document.querySelector('.spotify-modal').style.display = 'none';
  }

  function exitModal() {
    window.location.href = "/exit"
  }

  // Check to see if device is accessing site on mobile
// $(window).resize(function() {
  if (window.location.pathname == "/") {
    if( /Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        if (window.matchMedia("(orientation: portrait)").matches) {
            // you're in PORTRAIT mode
            document.querySelector('.optimize-modal').style.display = 'none';
        }
  
        if (window.matchMedia("(orientation: landscape)").matches) {
            document.querySelector('.optimize-modal').style.display = 'none';
            // you're in LANDSCAPE mode
            // alert("Error! Please re-initialize experience on a mobile device in portrait mode.")
            // window.location.href = "/";
        }
    } else {
      // alert("Error! Please re-initialize experience on a mobile device in portrait mode.")
      // window.location.href = "/";
      document.querySelector('.optimize-modal').style.display = 'flex';
    }
  }
// }).resize();

document.getElementById('optimize-modal-close').addEventListener('click', function() {
  document.querySelector('.optimize-modal').style.display = 'none';
})

