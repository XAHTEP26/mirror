(async function() {
  document.querySelector(".video").srcObject =
    await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        facingMode: "user"
      }
    });
})();
