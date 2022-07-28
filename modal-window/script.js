"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

// Close modal window
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
// Open modal window
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", openModal);
  // ATTENTION-HERE we are not calling the function => closeModal()
  // it would immediately call the function as soon as js executed the code
  // we want the func to be called when click event happened so we use without paranthesis
  btnCloseModal.addEventListener("click", closeModal);
}
// ATTENTION: it closes the modal even if you click somewhere out of the window
overlay.addEventListener("click", closeModal);

// NOTES: Keyboard events are global events
// document.addEVentListener => were listening for event EVERYWHERE
// no matter where they happen on the page
// ~ keydown = fired as soon as you press the key
// ~ keypress = is fired continuously
// ~ keyup = fired when you lift off your finger
// document.addEventListener('keydown') = any key

document.addEventListener("keydown", function (event) {
  //console.log(event); // prints all the info about the pressed key
  //console.log(event.key); // prints the name of the pressed key
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
