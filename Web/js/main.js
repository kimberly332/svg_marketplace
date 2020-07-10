// Declare variables


(() => {
  if (typeof document !== 'undefined') {
    let count = 0; // count number of clicks

    let getImages = document.querySelectorAll("img");

    function onClick() {
      let msg = "Clicked on a graph - this one: " + this.id;
      console.log(msg);

      // add filter
      var element = document.querySelectorAll("mainIconImage");
      this.classList.toggle("grayscale");

      // add audio
      let audio = document.querySelector("audio");
      audio.play();
    }
    getImages.forEach(img => img.addEventListener("click", onClick));

  }

})();
