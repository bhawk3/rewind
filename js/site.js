//Get the string from the page
//Controller function
function getValues() {

    document.getElementById("alert").classList.add("invisible");

    //Get string from page
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);

    displayString(revString);

}

//Reverse the string
//Logic function
function reverseString(userString) {

    let revString = [];

    //let name = Bobby
    //name[0] = "B";
    // name[4] = "y";
    // last position in an array name.length - 1;
    
    //reverse a string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {

        revString += userString[index];
        
    }
    return revString;
}

//Display the reversed string to the user
//View function
function displayString(revString) {

    //write the message to the page
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`; 

    //turn on the alert box
    document.getElementById("alert").classList.remove("invisible");
}