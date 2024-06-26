console.log("Events Tutorial")

// For Selecting a button...
const btn = document.querySelector("button")

// For Box
const box = document.querySelector(".Box")

// Create a function that will hepl when we click on the button then box will automatically Red or any other Color.
btn.addEventListener("click",
    function() {
        box.style.backgraoundColor = "red"
    }
)