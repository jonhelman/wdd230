   const specialtiesMade = document.querySelector("#drink-count");

   let numMade = Number(window.localStorage.getItem("drinks-made"));

   if (numMade !== 0) {
    specialtiesMade.textContent = numMade;
  } else {
    specialtiesMade.textContent = `Make your first mix now!`;
  }

  numMade++;
