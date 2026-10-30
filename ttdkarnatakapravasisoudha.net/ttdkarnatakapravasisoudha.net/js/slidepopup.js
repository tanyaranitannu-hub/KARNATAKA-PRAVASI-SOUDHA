// Selecting elements
const openModalBtns = document.querySelectorAll(".openModalBtn");
const modalContainer = document.getElementById("modalContainer");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalContent = document.getElementById("modalContent");

// Content variables
const contentMap = {
  modal1: document.getElementById("modelone").innerHTML,
  modal2: document.getElementById("modeltwo").innerHTML,
  modal3: document.getElementById("modelthree").innerHTML,
  modal5: document.getElementById("privacypolicy").innerHTML,
  
};

// Adding event listeners to open modal buttons
openModalBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const modalTarget = button.getAttribute("data-modal-target");
    modalContent.innerHTML = contentMap[modalTarget] || "";

    // Display modal container
    modalContainer.style.display = "block";

    // Hide body overflow
    document.documentElement.style.overflow = "hidden";
    // Apply animation based on window width
    if (window.innerWidth <= 600) {
      document.getElementById("modal").style.animation = "slideIn .5s ease-out";
    } else {
      document.getElementById("modal").style.animation = "slideleft .5s ease-in";
    }
    document.body.style.overflow = "hidden"; // Hide body overflow
    
  });
});

// Adding event listener to close modal button
closeModalBtn.addEventListener("click", () => {
  // Apply appropriate animation based on window width
  if (window.innerWidth <= 600) {
    document.getElementById("modal").style.animation = "slideOut .5s ease-out";
  } else {
    document.getElementById("modal").style.animation = "slideleftOut .5s ease-out";
  }
  // Hide modal after animation
  setTimeout(function () {
    modalContainer.style.display = "none";
    // Reset overflow styles
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto"; // Reset body overflow to default
    // Reset modal animation
    document.getElementById("modal").style.animation = "none";
  }, 500);
});