<!--validation form-->
function validateForm() {
    var x = document.forms["myForm"]["first_name"].value;
    if (x == null || x == "") {
        alert("fName must be filled out");
        return false;
    }
     var y = document.forms["myForm"]["last_name"].value;
     if (y == null || y == "") {
        alert("LName must be filled out");
        return false;
    }
   var gender=document.myForm.sex.value;
    if ( (document.myForm.sex[0].checked == false ) && ( document.myForm.sex[1].checked == false ) )
    {
    alert( "Please choose your Gender: Male or Female" );
    return false;
    }
       var countryName=document.myForm.country.value;
    if(countryName == "Default")  
    {  
    alert('Select your country from the list');  
    return false;  
    }

   
    var language=document.myForm.language.value;
     if ( (document.myForm.language[0].checked == false ) && ( document.myForm.language[1].checked == false ) )
    {
    alert( "Please choose your language" );
    return false;
    }
     var z = document.forms["myForm"]["user_id"].value;
     if (z == null || z == "") {
        alert("user id must be filled out");
        return false;
    }

    var a = document.forms["myForm"]["password"].value;
     if (a == null || a == "") {
        alert("password must be filled out");
        return false;
    }
     
     var b = document.forms["myForm"]["email"].value;
     if (b == null || b == "") {
        alert("email must be filled out");
        return false;
    }
alert("Registration successfull");

}