//jshint esversion:6
function gotowhatsapp() {
    let query = document.getElementById("newsletter1").value;
    let url =
        "https://wa.me/918088263376?text=" +
        "Hi Gyan Academy , I have query about... :- "
        + query;
    window.open(url, "_blank").focus();
}
function gowhatsapp() {
    let firstname = document.getElementById("firstName").value;
    let lastname = document.getElementById("lastname").value;
    let gender = document.getElementById("gender").value;
    let dob = document.getElementById("dob").value;
    let motherTongue = document.getElementById("m-tongue").value;
    let pname = document.getElementById("pname").value;
    let fatherOccupation = document.getElementById("occupation").value;
    let motherName = document.getElementById("m-name").value;
    let motherOccupation = document.getElementById("m-occupation").value;
    let phone = document.getElementById("phone").value;
    let parentsPhone = document.getElementById("pphone").value;
    let email = document.getElementById("email").value;
    let pphone = document.getElementById("pphone").value;
    let houseBuildingno = document.getElementById("House-Building-no").value;
    let Streetlocality = document.getElementById("Street-locality").value;
    let district = document.getElementById("district").value;
    let state = document.getElementById("state").value;
    let pinCode = document.getElementById("pin-code").value;
    var std = document.getElementById("std").value;
    var scname = document.getElementById("scname").value;

    var stream = document.getElementById("stream").value;
    var mode = document.getElementById("mode").value;
    var board = document.getElementById("board").value;
    var ref = document.getElementById("ref").valuvar

    var markedCheckbox = document.getElementsByName('data[sub]');
    var subjects = " ";
    for (var i = 0; i < markedCheckbox.length; i++) {
        if (markedCheckbox[i].checked) {
            subjects += markedCheckbox[i].value + " ; ";

        }
    }
    return new Promise(resolve => {

    let url = "https://wa.me/918088263376?text="+
        "Name of the student : " + "*" +
        firstname + " " + lastname + "*" +
        "%0a" +
        "%0a" +
        "Students Contact Number: " + 
        phone +
        "%0a" +
        "%0a" +
        "Gender : "
        + gender +
        "%0a" +
        "%0a" +
        "Date of Birth: "
        + dob +
        "%0a" +
        "%0a" +
        "Name of Father : "
        + pname +
        "%0a" +
        "%0a" +
        "Name of Mother : " + motherName +
        "%0a" +
        "%0a" +
        "Parents Contact Number : "
        + pphone +
        "%0a" +
        "%0a" +
        "Residential Address : "
        + houseBuildingno + "," + Streetlocality + ", " + district + ", " + state + ", " + pinCode +
        "%0a" +
        "%0a" +
        "Class Studying : "
        + std +
        "%0a" +
        "%0a" +
        "School/College Studying : " + "*"
        + scname + "*" +
        "%0a" +
        "%0a" +
        "Subjects Needed : "
        + subjects +
        "%0a" +
        "%0a" +
        "Stream : "
        + stream +
        "%0a" +
        "%0a" +
        "Mode of Teaching : " + "*" +
        mode + "*" +
        "%0a" +
        "%0a" +
        "Board : "
        + board;






        window.open(url, "_blank").focus();
    })
}

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form...
    var x = document.getElementsByClassName("form-group");
    x[n].style.display = "block";
    //... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = 'Submit';
        document.getElementById("nextBtn").setAttribute('type', 'submit');
        document.getElementById("nextBtn").setAttribute('onsubmit', 'submitAllFunction()');
    } else {
        document.getElementById("nextBtn").innerHTML = "Next";
    }
    //... and run a function that will display the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("form-group");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm())
        return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form...
    if (currentTab >= x.length) {
        // ... the form gets submitted:
        document.getElementById("regForm").submit();
        return false;
    }

    // Otherwise, display the correct tab:
    showTab(currentTab);

}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("form-group");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].classList = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class on the current step:
    x[n].className += " active";
}
//  sending form to google sheets
async function sendtoGsheets() {
    return new Promise(resolve => {


        const scriptURL = 'https://script.google.com/macros/s/AKfycbyNg38Y-ko7UBTLq4gXvGpp9mBH9SUBxZVRARwuXtnVRC41cSveybvvHuouKSBkfIEHTg/exec'
        const form = document.getElementById('regForm');

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { 
                method: 'POST',
                 body: new FormData(form) ,
                }).then(response => response.json())
                .then((html)=>
                {
                    window.location.href ="";
                });
        });
    });
}

async function sendEmail() {
    return new Promise(resolve => {
        Email.send({
            SecureToken: "63d38ca0-7d6c-43c2-939f-3b2f8c70b59b",
            To: 'sngyan.acs@gmail.com',
            From: "ajaytainwala@gmail.com",
            Subject: "New Student has Registered" + firstname + " " + lastname,
            Body: url
        }).then(
            message => alert(message)
        );
    })
}
async function submitAllFunction() {
    await gowhatsapp();
    await sendEmail();
    await sendtoGsheets();
}
