window.onload = function(){
	chrome.storage.sync.get(function(items){
		document.getElementById("rollno").value=items.rollno;
		document.getElementById("pass").value=items.pass;
		setInterval(clicker, 10000);	
	});
	function clicker(){
    document.getElementById("submit").click();
	};
	document.getElementById("form").addEventListener("submit",function(){
		var rollno = document.getElementById("rollno").value;
		var pass = document.getElementById("pass").value;
		chrome.storage.sync.set({'rollno': rollno,'pass': pass}, function() {
    	document.getElementById("test").innerHTML='Settings saved';
		});
	/*	var url = 'http://internship.iitm.ac.in/students/comp_list.php';
    var xhr = new XMLHttpRequest();
		xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		alert(2);
    xhr.onreadystatechange = function() { 
        if (xhr.readyState == 4 && xhttp.status == 200) {
//      document.getElementById("").innerHTML = xhttp.responseText;
			alert(1);
			console.log(xhttp.responseText);
    }
  	};
  	xhr.open("GET", url, true);
  	xhr.send();*/
	});
};
