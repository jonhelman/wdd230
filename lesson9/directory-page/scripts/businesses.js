const requestURL = 'https://jonhelman.github.io/wdd230/lesson9/directory-page/scripts/data.json';
const cards = document.querySelector('.grid');

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
 // let company = document.createElement('h2');
  let logo = document.createElement('img');
  let title = document.createElement('p')
  let address = document.createElement('p');
  let phone_no = document.createElement('p');
  let site = document.createElement('a');

  let membership = document.createElement("p")

  // Change the textContent property of the h2 element to contain the prophet's full name

 title.innerHTML = `<strong class = "title">${businesses.company}</strong>`;
 address.innerHTML = `${businesses.address}`;
 phone_no.innerHTML = `${businesses.phone}`;
 site.innerHTML = `${businesses.website}`;
 membership.innerHTML = `<strong class="${businesses.level}">${businesses.level}</strong>`;


  // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
  site.setAttribute("href", `${businesses.website}`);
  
  logo.setAttribute('src', businesses.image);

  logo.setAttribute('alt', `${businesses.company}`);
  logo.setAttribute('loading', 'lazy');

  // Add/append the section(card) with the h2 element
  card.appendChild(logo)
  card.appendChild(title)
  card.appendChild(address)
  card.appendChild(phone_no)
  card.appendChild(site)
  card.appendChild(membership)

  // Add/append the existing HTML div with the cards class with the section(card)
  document.querySelector('div.grid').appendChild(card);

//Grid-list

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".grid");

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}

}