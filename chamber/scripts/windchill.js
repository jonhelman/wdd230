function set_weather_data(){
    const T = parseFloat(document.getElementById('temperature').textContent);
    const V = parseFloat(document.getElementById('wspeed').textContent);
    
    const F = document.getElementById('wchill');

    let windchill = 0; 

    if (T <= 10 && V > 4.8){

        windchill = 13.12 + 0.6215 * T - 11.37 * V ** 0.16 + 0.3965 * T * V ** 0.16;
        windchill = windchill.toFixed(1);

    }else{

        windchill = "N/A";
    
    }
    
    F.textContent = windchill;

}


// set_weather_data();