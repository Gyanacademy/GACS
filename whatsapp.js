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