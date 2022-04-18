
function displayPageOne() {

    page1.style.display = "block";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "none";

}

function displayPageTwo() {

    if (document.getElementById("firstName").value.trim() == "" ||        
        document.getElementById("emailAddress").value.trim() == "") {
        alert("Fill in all fields!");
    }
    else {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "none";
        page4.style.display = "none";
        page5.style.display = "none";

    }

}

function displayPageThree() {

    if (document.getElementById("bookingDate").value.trim() == "" ||
        document.getElementById("bookingLengthTxt").value.trim() == "") {
        alert("Select date and length");
    }

    else{
        page1.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "block";
        page4.style.display = "none";
        page5.style.display = "none";
    }

}

function displayPageFour() {
    var cboxSurfboard = document.getElementById("checkboxSurfboard")

    if (cboxSurfboard.checked == true) {
        page1.style.display = "none";
        page2.style.display = "none";
        page3.style.display = "none";
        page4.style.display = "block";
        page5.style.display = "none";
    } else {
        displayPageFive();
    }

}

function displayPageFive() {
    //page one
    var firstName = document.getElementById("firstName");
    //var lastName = document.getElementById("lastName");
    var emailAddress = document.getElementById("emailAddress");

    //page two
    var bookingDate = document.getElementById("bookingDate");
    var bookingLength = document.getElementById("bookingLength");

    //page three
    var numberOfGuests = document.getElementById("numberOfGuests");
    var cboxSurfboard = document.getElementById("checkboxSurfboard")

    //page four
    var numberOfSurfboards = document.getElementById("numberOfSurfboards")
    var colorOfSurfboards = document.getElementById("colorOfSurfboards")

    page1.style.display = "none";
    page2.style.display = "none";
    page3.style.display = "none";
    page4.style.display = "none";
    page5.style.display = "block";

    document.getElementById("fullNameField").innerHTML = "Full Name: " + firstName.value;
    document.getElementById("emailAddressField").innerHTML = "Email Address: " + emailAddress.value;
    document.getElementById("bookingArrivalField").innerHTML = "Arrival Date: " + bookingDate.value;
    document.getElementById("bookingDepartingField").innerHTML = "Booking Length: " + bookingLength.value +" nights";
    document.getElementById("numberOfGuestsField").innerHTML = "Number of Guests: " + numberOfGuests.value;    

    if (cboxSurfboard.checked == true){
        document.getElementById("numberOfSurfboardsField").innerHTML = "Surfboards hired: " + numberOfSurfboards.value;
        document.getElementById("numberOfSurfboardsField").style.color =  colorOfSurfboards.value; 
        //document.getElementById("previousButton").onclick = "displayPageFour()";      
    }
    else if(cboxSurfboard.checked == false){
        document.getElementById("numberOfSurfboardsField").innerHTML = " ";
        //document.getElementById("previousButton").onclick = "displayPageThree()"; 
    }   

}

function confirmDetails(){
    var radioYes = document.getElementById("termsYes")

    if (radioYes.checked == true){
        
        document.getElementById('pBar').value += 100;
        document.getElementById("progressText2").innerHTML = "Booking Progress: 100%";
        alert("Booking Confirmed!");
    }
    else{
        alert("You must agree to Piha terms and conditions to book.");
    }

}

function updateTextRange(num){
    document.getElementById('bookingLengthTxt').value=num + " Nights";
}

function dropDownMenu(link){
    {
        window.location = link.value;
    }

}



