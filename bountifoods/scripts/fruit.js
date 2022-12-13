const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

//Fruits 1
let dropdown1 = document.getElementById('fruits-1');
dropdown1.length = 0;

let defaultOption1 = document.createElement('option');
defaultOption1.text = 'Select a fruit';

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
defaultOption2.text = 'Select a fruit';

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
defaultOption3.text = 'Select a fruit';

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

      // Examine the text in the response  
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


