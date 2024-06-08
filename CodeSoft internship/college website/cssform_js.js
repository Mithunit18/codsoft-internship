

   let x=document.getElementById("myform");
   x.addEventListener("focus",myfocus,true);
   x.addEventListener("blur",myblur,true);

   function myfocus()
   {
      document.getElementById("fullname").style.backgroundColor="lightblue";
      document.getElementById("DOB").style.backgroundColor="lightblue";
      document.getElementById("email").style.backgroundColor="lightblue";
      document.getElementById("password").style.backgroundColor="lightblue";
   }

   function myblur()
   {
      document.getElementById("fullname").style.backgroundColor="";
      document.getElementById("DOB").style.backgroundColor="";
      document.getElementById("email").style.backgroundColor="";
      document.getElementById("password").style.backgroundColor="";
   }  