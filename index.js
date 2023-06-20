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
function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validation(){
    var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var gender = document.getElementById("gender").checked;
        var dob = document.getElementById("dob").value;
        var pname = document.getElementById("pname").value;
        var pphone = document.getElementById("pphone").value;
        var address = document.getElementById("address").value = text;
        var std = document.getElementById("std").selected;
        var scname = document.getElementById("scname").value;
        var subjects = document.getElementById("subjects").checked;
        var stream = document.getElementById("stream").checked;
        var mode = document.getElementById("mode").checked;
        var board = document.getElementById("board").checked;
        var ref = document.getElementById("ref").value;
    
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    

    return returnval;
}
// function validation() {

//     var name = document.getElementById("name").value;
//     var phone = document.getElementById("phone").value;
//     var email = document.getElementById("email").value;
//     var gender = document.getElementById("gender").checked;
//     var dob = document.getElementById("dob").value;
//     var pname = document.getElementById("pname").value;
//     var pphone = document.getElementById("pphone").value;
//     var address = document.getElementById("address").value = text;
//     var std = document.getElementById("std").selected;
//     var scname = document.getElementById("scname").value;
//     var subjects = document.getElementById("subjects").checked;
//     var stream = document.getElementById("stream").checked;
//     var mode = document.getElementById("mode").checked;
//     var board = document.getElementById("board").checked;
//     var ref = document.getElementById("ref").value;
//     var msg = "";


//     if (name.value == "") {
//         msg("Name is Requires");


//         name.focus();

//         return;
//     }
//     else if (phone.value == "") {
//         msg("Mobile nunber Required");
//         phone.focus();
//         return;
//     }
//     else if (email.value == "") {
//         msg("Email is required");
//         email.focus();
//         return;
//     }
//     else if (gender.checked == "") {
//         msg("Gender is required");
//         gender.focus();
//         return;
//     }
//     else if (dob.value == "") {
//         msg("Date of birth is required");
//         dob.focus();
//         return;
//     }
//     else if (pname.value == "") {
//         msg("Parent name is required");
//         pname.focus();
//         return;
//     }
//     else if (address.value = text == "") {
//         msg("Address is required");
//         address.focus();
//         return;
//     }
//     else if (std.selected == "") {
//         msg("class studying is needed");
//         std.focus();
//         return;
//     }
//     else if (scname.value == "") {
//         msg("School /College  is needed");
//         scname.focus();
//         return;
//     }
//     else if (subjects.checked == "") {
//         msg("Subjects is needed");
//         subjects.focus();
//         return;
//     }
//     else if (stream.checked == "") {
//         msg("Stream is needed");
//         stream.focus();
//         return;
//     }
//     else if (mode.checked == "") {
//         msg("Modeis needed");
//         mode.focus();
//         return;
//     }
//     else if (board.checked == "") {
//         msg("Board is needed");
//         board.focus();
//         return;
//     }
//     else if(ref.value == "") {
//         msg("Refrence is needed");
//         ref.focus();
//         return;
//     }
//     alert(msg);
    

// }

function whatsapp(){
    validation();
    if(validation == true){
        gowhatsapp();
    }
}

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});