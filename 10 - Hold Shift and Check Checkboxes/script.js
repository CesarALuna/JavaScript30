const checkboxes = document.querySelectorAll('.inbox input[type = "checkbox"]');

let lastChecked;

function handleCheck(e) {
  // check if 'shift' key was down
  // AND check if they are checking it
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    //loop over every checkbox
    checkboxes.forEach((checkbox) => {
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }
      if (inBetween && lastChecked.checked) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
