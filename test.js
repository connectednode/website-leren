function display() {
    alert(myObj.name);
 }
 var myJSON = '{"name":"John", "age":31, "city":"New York"}';
var myObj = JSON.parse(myJSON);
