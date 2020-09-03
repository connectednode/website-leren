document.getElementById("button").addEventListener('click', loadusers);
function loadusers() {
console.log('test1');
var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var users = JSON.parse(this.responseText)
      var output = '';
      for(var i in users){
          output +=
          '<div class="user">' +
          '<img src="'+users[i].avatar_url+'" with="70" height="70">' +
          '<ul>' +
          '<li>ID: '+users[i].id+'</li>' +
          '<li>Login: '+users[i].login+'</li>' +
          '<ul>' +
          '</div>';
      }
      document.getElementById("user").innerHTML = output
    }
  
  }  
  xmlhttp.open("GET", "???", true);
  xmlhttp.send(); 
  
console.log('test2');
}