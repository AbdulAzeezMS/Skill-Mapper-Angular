function username(t)
		{
			var letters = /^\S+$/;
			var a=document.getElementById("uname");
			if(!a.value.match(letters))
			{
				document.getElementById("uname").style.borderBottom = "3px solid red";
			}
			
			else
			{
				document.getElementById("uname").style.borderBottom = "1px solid #fff";
			}		
		}
		function pasword(t)
		{
			var pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
			var a=document.getElementById("password");
			if(!a.value.match(pass) )
			{
				document.getElementById("password").style.borderBottom = "3px solid red";
			}
			
			else
			{
				document.getElementById("password").style.borderBottom = "1px solid #fff";
			}	
		}
			
		function submitlogin()
		{
			if(document.getElementById("uname").value=="" || document.getElementById("uname").style.borderBottom == "3px solid red")
			{
				alert("please Enter your valid User Name or Email Id");
				return false;
			}
			else if(document.getElementById("password").value=="" || document.getElementById("password").style.borderBottom == "3px solid red")
			{
				alert("please Enter your valid Password ");
				return false;
			}
			else
			{
				alert("login Successfully")
			}
		}