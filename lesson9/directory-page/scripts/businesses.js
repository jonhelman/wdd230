const requestURL = 'https://jonhelman.github.io/wdd230/lesson9/directory-page/scripts/data.json';
const cards = document.querySelector('.nothing personal');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    
    const businesses = jsonObject['businesses'];
    businesses.forEach(displayBusinesses);
  });
    


function displayBusinesses(businesses) {
  // Create elements to add to the document
  let card = document.createElement('section');
  let company_name = document.createElement('h2');
//  let logo = document.createElement('img');
  let address = document.createElement('p');
  let phone_no = document.createElement('p');

  // Change the textContent property of the h2 element to contain the prophet's full name

 address.innerHTML = `${businesses.address}`;
 phone_no.innerHTML = `${businesses.phone}`;

  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  //portrait.setAttribute('src', prophet.imageurl);

///  portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${no_suffix} Latter-day President`);
//  portrait.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(company_name);
  card.appendChild(address)
  card.appendChild(phone_no)
//  card.appendChild(portrait);

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.nothing personal').appendChild(card);
}