// Declare variables


(() => {
  if (typeof document !== 'undefined') {
    let count = 0; // count number of clicks

    let getImages = document.querySelectorAll("img");

    function onClick() {
      let msg = "Clicked on a graph - this one: " + this.id;
      console.log(msg);

      // add filter
      count += 1; // update count
      if (count % 2 === 0) { // color
        this.style.filter = "grayscale(0%)"
      } else { // gray
        this.style.filter = "grayscale(100%)"
      }

      // add audio
      let audio = document.querySelector("audio");
      audio.play();
    }
    getImages.forEach(img => img.addEventListener("click", onClick));

  }

})();
