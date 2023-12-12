window.onload = function(){

// ----------------------------------------------------------

    //global variables:
    //-----------------
    var id1 = document.getElementById('degree_label_1');
    var id2 = document.getElementById('degree_label_2');
    var id3 = document.getElementById('degrees_entered');
    var output = document.getElementById('degrees_computed');
    var tf;//true if celsius is input value

// ----------------------------------------------------------
 
    //clears the text boxes for input and output:
    //-------------------------------------------
    function clearTextBoxes(){
        id3.value = "";
        output.value = "";
    }//end of clear function

// ----------------------------------------------------------

    // converts temp from c -> f or f -> c:
    //-------------------------------------
    function convertTemp(){

        var input = document.getElementById('degrees_entered').value;

        //input validation does not work!!!
        if(isNaN(input)){
            alert("You must enter a valid number for degrees");
            clearTextBoxes();
        }else{
            if(tf){
                //convert Celsius to Fahrenheit
                input = Math.round((input * (9/5)) + 32);
            }else{
                //convert Fahrenheit to Celsius
                input = ((input-32) * (5/9));
            }
            //final output
            output.value = input;
        }

    }//end of function convertTemp

// ----------------------------------------------------------

    // formats html to convert fahrenheit to celsius:
    //-----------------------------------------------
    function toCelsius(){
        id1.innerHTML = "Enter F degrees:";
        id2.innerHTML = "Degrees Celsius:";

        tf = false;
        clearTextBoxes();
    }//end of function toCelsius

// ----------------------------------------------------------

    // formats html to convert celsius to fahrenheit:
    //-----------------------------------------------
    function toFahrenheit(){
        id1.innerHTML = "Enter C degrees:"
        id2.innerHTML = "Degrees Fahrenheit";
        
        tf = true;
        clearTextBoxes();
    }//end of function toFahrenheit

// ----------------------------------------------------------

    // even listeners for the radio buttons and convert button:
    // --------------------------------------------------------

    // (top) Fahrenheit to Celsius radio button event listener
    document.getElementById('to_celsius').addEventListener('click', toCelsius);

    // (bottom) Celsius to Fahrenheit radio button event listener
    document.getElementById('to_fahrenheit').addEventListener('click', toFahrenheit);

    // convert button event listener
    document.getElementById('convert').addEventListener('click', convertTemp);

// ----------------------------------------------------------

};//end of window onload function