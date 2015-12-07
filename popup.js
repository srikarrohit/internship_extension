window.onload = function(){
	chrome.storage.sync.get(function(items){
					console.log(items.rollno);
					document.getElementById("rollno").value=String(items.rollno);
					document.getElementById("pass").value=String(items.pass);
					alert(pass.value);
					document.getElementById("form").submit();
					});
	document.forms["form"].addEventListener("submit",function(){
//	var btn=document.getElementById("btn");
	var rollno = document.getElementById("rollno").value;
	var pass = document.getElementById("pass").value;
//	console.log(1);
	chrome.storage.sync.set({'rollno': rollno,'pass': pass}, function() {
          document.getElementById("test").innerHTML='Settings saved';
					});
	chrome.storage.sync.get(function(items){
					console.log(items.rollno);
					alert(items.rollno)
					alert(items.pass);
					});
});
};
//	alert(chrome.storage.sync.get({'rollno','pass'});
/*function test(items){
console.log(items.rollno);
}
};*/
