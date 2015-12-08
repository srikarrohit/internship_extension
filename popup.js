window.onload = function(){
	chrome.storage.sync.get(function(items){
		document.getElementById("rollno").value=items.rollno;
		document.getElementById("pass").value=items.pass;
		setInterval(clicker, 10000);	
	});
	function clicker(){
    document.getElementById("submit").click();
	};
	document.getElementById("submit").addEventListener("click",function(){
		var rollno = document.getElementById("rollno").value;
		var pass = document.getElementById("pass").value;
		chrome.storage.sync.set({'rollno': rollno,'pass': pass}, function() {
    	document.getElementById("test").innerHTML='Settings saved';
				var namsespace="sync";
			});
		var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
    	if (xhttp.readyState == 4 && xhttp.status == 200) {
      	document.getElementById("test").innerHTML = xhttp.responseText;
				chrome.storage.sync.set({'count': xhttp.responseText});
				}
  	};
  	xhttp.open("GET", "http://localhost/ext1/puller.php?rollno="+rollno+"&pass="+pass+"&submit=Login", true);
  	xhttp.send();
		chrome.storage.onChanged.addListener(function(changes, namespace) {
				var key="count";
        var storageChange = changes[key];
        console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
				alert("New company is added");
        });
	});
};
