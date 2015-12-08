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
	});
};
