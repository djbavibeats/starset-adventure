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