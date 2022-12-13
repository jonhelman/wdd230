const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

let numMade = Number(window.localStorage.getItem("drinks-made"));

//Fruits 1
let dropdown1 = document.getElementById('fruits-1');
dropdown1.length = 0;

let defaultOption1 = document.createElement('option');
defaultOption1.text =  "";

dropdown1.add(defaultOption1);
dropdown1.selectedIndex = 0;

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option1;

    	for (let i = 0; i < data.length; i++) {
          option1 = document.createElement('option');
      	  option1.text = data[i].name;
      	  dropdown1.add(option1);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });

//Fruits 2
let dropdown2 = document.getElementById('fruits-2');
dropdown2.length = 0;

let defaultOption2 = document.createElement('option');
defaultOption2.text = "";

dropdown2.add(defaultOption2);
dropdown2.selectedIndex = 0;

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        let option2;
    
    	for (let i = 0; i < data.length; i++) {
          option2 = document.createElement('option');
      	  option2.text = data[i].name;
      	  dropdown2.add(option2);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });

//Fruits 3

let dropdown3 = document.getElementById('fruits-3');
dropdown3.length = 0;

let defaultOption3 = document.createElement('option');
defaultOption3.text = "";

dropdown3.add(defaultOption3);
dropdown3.selectedIndex = 0;

fetch(url)  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.warn('Looks like there was a problem. Status Code: ' + 
          response.status);  
        return;  
      }

      response.json().then(function(data) {  
        let option3;
    
    	for (let i = 0; i < data.length; i++) {
          option3 = document.createElement('option');
      	  option3.text = data[i].name;
      	  dropdown3.add(option3);
    	}    
      });  
    }  
  )  
  .catch(function(err) {  
    console.error('Fetch Error -', err);  
  });

  function submitForm(event) {
    
    console.log(fruitcarbs1)

    localStorage.setItem("drinks-made", ++numMade);
 
    event.preventDefault();
    var form = event.target;
    var data = new FormData(form);

    //fetch('/submit-form', {
     // method: 'POST',
     // body: data
   // });
  
    
    var mixedresults = document.getElementById('created-mix');
    mixedresults.style.display = 'block';

    var inputName = document.getElementById('input-name');
    var inputEmail = document.getElementById('input-email');


    var submittedName =  document.getElementById('name')
    var submittedEmail =  document.getElementById('email')
    var submitDate = document.getElementById('order-date')
    var currentDate = new Date()

    var selectedFruit1 = document.getElementById('selected-1')
    var selectedFruit2 = document.getElementById('selected-2')
    var selectedFruit3 = document.getElementById('selected-3')

    submittedName.innerHTML = inputName.value;
    submittedEmail.innerHTML = inputEmail.value;
    selectedFruit1.innerHTML = dropdown1.value;
    selectedFruit2.innerHTML = dropdown2.value;
    selectedFruit3.innerHTML = dropdown3.value;
    submitDate.innerHTML = currentDate.toLocaleDateString();


  }
