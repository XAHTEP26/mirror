navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => document.querySelector('.video').srcObject = stream);
