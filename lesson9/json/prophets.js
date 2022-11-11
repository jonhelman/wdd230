const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);
  });
    


function displayProphets(prophet) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let portrait = document.createElement('img');

  //✅ Add two other components for the birth date and birth place as illustrated in the example above.
  let bday = document.createElement('p');
  let bplace = document.createElement('p');

  // Change the textContent property of the h2 element to contain the prophet's full name
  //✅ Rewrite (refactor) the lines of code for the h2 content
  h2.innerHTML = `${prophet.name}  ${prophet.lastname}`;

  bday.innerHTML = `Birth Date: ${prophet.birthdate}`;
  bplace.innerHTML = `Birth Place: ${prophet.birthplace}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  portrait.setAttribute('src', prophet.imageurl);

  //✅ Refactor the image alternative text and add the prophet number at the end of the prophet name,

  if (prophet.order = 1) {
    no_suffix = "st";
  } else if (prophet.order = 2) {
    no_suffix = "nd";
  } else if (prophet.order = 3) {
    no_suffix = "rd";
  } else { 
    no_suffix = "th";
  }

  portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${no_suffix} Latter-day President`);
  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(h2);
  card.appendChild(bday)
  card.appendChild(bplace)
  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.cards').appendChild(card);
}