/*first we defining 3 functionname and after that declaring the two variables ie a &b & targetting html elements using Js Dom methods*/
function calfun()
	{
		var a=parseInt(document.getElementById('number').value);
		var b=parseInt(document.getElementById('numbers').value);
		document.getElementById('Result').innerHTML=a+b;
	}
	function calfun1()
	{
		var a=parseInt(document.getElementById('number').value);
		var b=parseInt(document.getElementById('numbers').value);
		document.getElementById('Result').innerHTML=a-b;
	}
	function calfun2()
	{
		var a=parseInt(document.getElementById('number').value);
		var b=parseInt(document.getElementById('numbers').value);
		document.getElementById('Result').innerHTML=a*b;
	}
	function calfun3()
	{
		var a=parseInt(document.getElementById('number').value);
		var b=parseInt(document.getElementById('numbers').value);
		document.getElementById('Result').innerHTML=a/b;
	}