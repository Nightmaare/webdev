var query = document.getElementById("form");
function validation()
{
    var form = document.forms["form"]["textf"].value;

    if (form == "") {
      var result =  document.getElementById("result");
      result.innerHTML = "Veuillez entrer un text";
    }
    return false;
}

