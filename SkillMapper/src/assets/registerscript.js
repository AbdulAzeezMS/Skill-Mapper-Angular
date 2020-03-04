function firstname(t)
		{
			var letters = /^[A-Z\s]+$/;
			var a=document.getElementById("fname");
			a.value = a.value.toUpperCase();
			if(!a.value.match(letters))
			{
				document.getElementById("fname").style.borderBottom = "3px solid red";
			}
			
			else
			{
				document.getElementById("fname").style.borderBottom = "1px solid #fff";
			}		
		}
		function lastname(t)
		{
			var letters = /^[A-Z\s]+$/;
			var a=document.getElementById("lname");
			a.value = a.value.toUpperCase();
			if(!a.value.match(letters))
			{
				document.getElementById("lname").style.borderBottom = "3px solid red";
			}
			
			else
			{
				document.getElementById("lname").style.borderBottom = "1px solid #fff";
			}		
		}
		function emailid(t)
		{
			var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			var b=document.getElementById("email");
			if(!b.value.match(mailformat))
			{
				document.getElementById("email").style.borderBottom = "3px solid red";
			}
			else
			{
				document.getElementById("email").style.borderBottom = "1px solid #fff";
			}
		}
		function addres(t)
		{
			
			var b=document.getElementById("address").value;
			if(b=="")
			{
				document.getElementById("address").style.borderBottom = "3px solid red";
			}
			else
			{
				document.getElementById("address").style.borderBottom = "1px solid #fff";
			}
		}
		function skill(val)
		{
			var element=document.getElementById('skills');
			if(val=='others')
			{
				element.style.display='block';
				if(element.value=="")
				{
				document.getElementById("skills").style.borderBottom = "3px solid red";
				}
			}
			else if(val!='others')
			{
				document.getElementById("f").style.borderBottom = "1px solid #fff";
			}
			else
			{		
				element.style.display='none';
			}	
		}	
		function skil(t)
		{
			
			var b=document.getElementById("skills").value;
			if(b=="")
			{
				document.getElementById("skills").style.borderBottom = "3px solid red";
				alert("type your skill");
			}
			else
			{
				document.getElementById("skills").style.borderBottom = "1px solid #fff";
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
		function validatepasword(t)
		{
			var a=document.getElementById("password").value;
			var b=document.getElementById("cpassword").value;
			if (a != b) 
            {
				document.getElementById("cpassword").style.borderBottom = "3px solid red";
			} 
            else
			{
				document.getElementById("cpassword").style.borderBottom = "1px solid #fff";
			} 
        }
		function register()
		{
		a=document.getElementById("fname");
		b=document.getElementById("lname");
		c=document.getElementById("email");
		d=document.getElementById("address");
		e=document.getElementById("password");
		f=document.getElementById("cpassword");
		g=document.getElementById("gender");
		h=document.getElementById("skills");
		h1=document.getElementById("f");
		if(a.value=="" || a.style.borderBottom == "3px solid red")
		 {
		 alert("please Enter your First Name Properly(There is no characters & Numbers in the first name)");
		 return false;
		 }
		/*else if(b.value=="" || b.style.borderBottom == "3px solid red")
		 {
		 alert("please Enter your Last Name Properly(There is no characters & Numbers in the last name)");
		 return false; }
		else if(c.value=="" || c.style.borderBottom == "3px solid red")
		 {
		 alert("please Enter your EmailID Properly");
		  return false;}
		else if (g.value=="")
		 {
		 alert("Select your Gender");
         g.style.borderBottom = "3px solid red";
		  return false;} 
		else if(d.value=="" || d.style.borderBottom == "3px solid red")
		 {
		 alert("please Enter your Permanent Address Properly");
		  return false;}
		  */
		else if (h1.value=="" && h.value=="")
		{
		alert("select your skill or type your skills");
		h1.style.borderBottom = "3px solid red";
		return false;
		}
		else if (h1.value=="others"&& h.value=="")
		{
				alert("kindly type your skills");			
			return false;	
		}
		else if(e.value=="" || e.style.borderBottom == "3px solid red")
		 {
		 alert("please Enter your Password Properly(Must contain at least one number and one uppercase and lowercase letter, and at least 6 or more characters)");
		  return false;}
		else if(f.value=="" || f.style.borderBottom == "3px solid red")
		 {
		 alert("Password and Confirm Password Doesn't Match");
		  return false;}
		else
		 {
		 alert("Registerd Successfully")
		 }
		}
		function gen(t)
		{
		var f=document.getElementById("gender").value;
		if(f!="")
			{
				document.getElementById("gender").style.borderBottom = "1px solid #fff";
			}	
		}