let lf=document.getElementById("login-form");
let time=document.getElementById("time-now");
function validateForm() {
var str = document.forms["myForm"]["mobile"].value;
if(str.length==10){
    if (!(str.match(/(7|8|9)\d{9}/))) {
        alert("Invalid mobile number"); 
       return false;
    }
}
else
alert("Mobile Number should be 10 digit");

var stre = document.forms["myForm"]["email"].value;
if (!(stre.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
        alert("Invalid email-id"); 
       return false;
    }


var strp = document.getElementById("password").value;
if(strp.length>5){
if (!(strp.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/))) {
        alert("Password must contain\none uppercase\none lowercase\none number"); 
       return false;
    }
}
else
  alert("Password must be atleast 6 character long");
}
d=new Date();
setInterval(()=>{
  time.innerHTML=d.toLocaleString();
  console.log(d.toLocaleString())
},1000);