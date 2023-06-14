function gotowhatsapp() {
    let query = document.getElementById("newsletter1").value;
    let url =
        "https://wa.me/918088263376?text=" +
        "Hi Gyan Academy , I have query about... :- "
        + query;
    window.open(url, "_blank").focus();
}

// document.querySelector(".cet").click(function(){
//      window.location = "www.http://cetonline.karnataka.gov.in/kea/"; 
//     });

//  function show (){

// document.classList.remove("remove").style.display = "block";
// }

// whatsapp function
function gowhatsapp() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var pname = document.getElementById("pname").value;
    var pphone = document.getElementById("pphone").value;
    var address = document.getElementById("address").value;
    var std = document.getElementById("std").value;
    var scname = document.getElementById("scname").value;
    var subjects = document.getElementById("subjects").value;
    var stream = document.getElementById("stream").value;
    var mode = document.getElementById("mode").value;
    var board = document.getElementById("board").value;
    var ref = document.getElementById("ref").value;

    var url =
        "https://wa.me/918088263376?text=" +

        "Name of the student : "
        + name +
        "%0a" +
        "%0a" +
        "Students Contact Number: "
        + phone +
        "%0a" +
        "%0a" +
        "Email Id: "
        + email +
        "%0a" +
        "%0a" +
        "Gender : "
        + gender +
        "%0a" +
        "%0a" +
        "Date of Birth "
        + dob +
        "%0a" +
        "%0a" +
        "Name of Parent : "
        + pname +
        "%0a" +
        "%0a" +
        "Parents Contact Number : "
        + pphone +

        "%0a" +
        "%0a" +
        "Residential Address : "
        + address +
        "%0a" +
        "%0a" +
        "Class Studying : "
        + std +
        "%0a" +
        "%0a" +
        "School/College Studying : "
        + scname +
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
        "Mode of Teaching : " +
        mode +
        "%0a" +
        "%0a" +
        "Board : "
        + board +
        "%0a" +
        "%0a" +
        "Reference : "
        + ref;




    window.open(url, "_blank").focus();
}

function validation() {

    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").checked;
    var dob = document.getElementById("dob").value;
    var pname = document.getElementById("pname").value;
    var pphone = document.getElementById("pphone").value;
    var address = document.getElementById("address").value=text;
    var std = document.getElementById("std").selected;
    var scname = document.getElementById("scname").value;
    var subjects = document.getElementById("subjects").checked;
    var stream = document.getElementById("stream").checked;
    var mode = document.getElementById("mode").checked;
    var board = document.getElementById("board").checked;
    var ref = document.getElementById("ref").value;



    if (name.value == "") {
        alert("Name is Requires");


        name.focus();

        return;
    }
    if (phone.value == "") {
        alert("Mobile nunber Required");
        phone.focus();
        return;
    }
    if (email.value == "") {
        alert("Email is required");
        email.focus();
        return;
    }
    if (gender.value == "") {
        alert("Gender is required");
        gender.focus();
        return;
    }
    if (dob.value == "") {
        alert("Date of birth is required");
        dob.focus();
        return;
    }
    if (pname.value == "") {
        alert("Parent name is required");
        pname.focus();
        return;
    }
    if (address.value == "") {
        alert("Address is required");
        address.focus();
        return;
    }
    if (std.value == "") {
        alert("class studying is needed");
        std.focus();
        return;
    }
    if (scname.value == "") {
        alert("School /College  is needed");
        scname.focus();
        return;
    }
    if (subjects.value == "") {
        alert("Subjects is needed");
        subjects.focus();
        return;
    }
    if (stream.value == "") {
        alert("Stream is needed");
        stream.focus();
        return;
    }
    if (mode.value == "") {
        alert("Modeis needed");
        mode.focus();
        return;
    }
    if (board.value == "") {
        alert("Board is needed");
        board.focus();
        return;
    }
    if (ref.value == "") {
        alert("Refrence is needed");
        ref.focus();
        return;
    }

    var url =
        "https://wa.me/918088263376?text=" +

        "Name of the student : "
        + name +
        "%0a" +
        "%0a" +
        "Students Contact Number: "
        + phone +
        "%0a" +
        "%0a" +
        "Email Id: "
        + email +
        "%0a" +
        "%0a" +
        "Gender : "
        + gender +
        "%0a" +
        "%0a" +
        "Date of Birth "
        + dob +
        "%0a" +
        "%0a" +
        "Name of Parent : "
        + pname +
        "%0a" +
        "%0a" +
        "Parents Contact Number : "
        + pphone +

        "%0a" +
        "%0a" +
        "Residential Address : "
        + address +
        "%0a" +
        "%0a" +
        "Class Studying : "
        + std +
        "%0a" +
        "%0a" +
        "School/College Studying : "
        + scname +
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
        "Mode of Teaching : " +
        mode +
        "%0a" +
        "%0a" +
        "Board : "
        + board +
        "%0a" +
        "%0a" +
        "Reference : "
        + ref;




    window.open(url, "_blank").focus();
}


