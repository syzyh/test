function testAjax(){
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(){
    if (xhr.readyState==4 && xhr.status==200){
      return xhr.responseText;
    }
  }
  xhr.open("GET","ajax/json.txt",true);
  xhr.send();
}
