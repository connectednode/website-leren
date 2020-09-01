document.getElementById("button").addEventListener('click', loadusers);
function loadusers() {
console.log('test1');
var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
    }
  };
  xmlhttp.open("GET", "https://api.github.com/", true);
  xmlhttp.send(); 
console.log('test2');
}