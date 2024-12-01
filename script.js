function myFunction() {
    let texter = document.getElementById("Restrict");
    let lengthoftext = texter.value.length;

    let countern = document.getElementById("place");
    countern.innerText = `${lengthoftext}/250`;

    if (lengthoftext >= 250) {
      texter.style.color = "red";
      texter.style.borderColor = "red";
    } else {
      texter.style.color = "black";
      texter.style.borderColor = "black";
    }
  }

  let texter = document.getElementById("Restrict");

  texter.addEventListener("input", myFunction); // Use 'input' for real-time feedback

  texter.addEventListener("keydown", (e) => {
    let length = texter.value.length; // Update length inside the event listener
    if (length >= 250 && e.key !== "Backspace" && e.key !== "Delete") {
      e.preventDefault(); // Block further input if max length is reached
    }
  });