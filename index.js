function gotowhatsapp() {
let query = document.getElementById("newsletter1").value;
let url=
"https://wa.me/918088263376?text=" +
"Hi Gyan Academy , i have query about... :- "
+ query ;
window.open(url, "_blank").focus();
}

// document.querySelector(".cet").click(function(){
//      window.location = "www.http://cetonline.karnataka.gov.in/kea/"; 
//     });

//  function show (){

// document.classList.remove("remove").style.display = "block";
// }