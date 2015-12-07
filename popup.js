window.onload = function(){
	chrome.storage.sync.get(function(items){
		//			console.log(items.rollno);
				document.getElementById("rollno").value=items.rollno;
				document.getElementById("pass").value=items.pass;
//					alert(pass.value);
//					document.forms["form"].submit();
				setInterval(clicker, 10000);	
					});
function clicker(){
      		document.getElementById("submit").click();
};
	document.getElementById("form").addEventListener("submit",function(){
//	var btn=document.getElementById("btn");
	var rollno = document.getElementById("rollno").value;
	var pass = document.getElementById("pass").value;
//	console.log(1);
	chrome.storage.sync.set({'rollno': rollno,'pass': pass}, function() {
          document.getElementById("test").innerHTML='Settings saved';
//					alert(1);
					});
/*	var namespace="sync";
	chrome.storage.onChanged.addListener(function(changes,namespace) {
        for (key in changes) {
          var storageChange = changes[key];
          console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
        }
      });*/
/*	chrome.storage.sync.get(function(items){
					console.log(items.rollno);
//					alert(String(items.rollno))
//					alert(items.pass);
					document.getElementById("rollno").value=items.rollno;
          document.getElementById("pass").value=items.pass;
					});*/
});
};
//	alert(chrome.storage.sync.get({'rollno','pass'});
/*function test(items){
console.log(items.rollno);
}
};*/
