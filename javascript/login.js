
function validateLoginForm() {
 
     var a = document.forms["myLoginForm"]["user"].value.length;
      var b = document.forms["myLoginForm"]["password"].value.length;
      var c = document.forms["myLoginForm"]["user"].value;
    if (a < 4 || a > 20) {
        alert("User name must be between 4 to 12 characters");
        return false;
                       }
    
    if ( b < 7 || b >12) {
        alert("password must be between 7 to 12 characters");
        return false;
      }
// // if(c=="geethu"||c=="hawa"||c=="elik")
// {
//  alert("Access granted");}
//  else
//  {
//     alert("Access denied");
//     return false;
//                         }
 
}