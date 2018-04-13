let time=document.getElementById("time-now");
function validateLoginForm() {
    let email = document.forms["login-form"]["email"].value;
  if (!(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
          alert("Invalid email-id"); 
         return false;
      }

  let password = document.forms["login-form"]["password"].value;
  if(password.length>5){
  if (!(password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/))) {
          alert("Password must contain\none uppercase\none lowercase\none number"); 
         return false;
      }
  }
  else
    alert("Password must be atleast 6 character long");
}

function validateSignupForm() {

  let phone = document.forms["signup-form"]["phone"].value;
  if(phone.length==10){
      if (!(phone.match(/(7|8|9)\d{9}/))) {
          alert("Invalid mobile number"); 
         return false;
      }
  }
  else
    alert("Mobile Number should be 10 digit");

  let email = document.forms["signup-form"]["email"].value;
  if (!(email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
          alert("Invalid email-id"); 
         return false;
      }


  let password = document.forms["signup-form"]["password"].value;
  if(password.length>5){
  if (!(password.match(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/))) {
          alert("Password must contain\none uppercase\none lowercase\none number"); 
         return false;
      }
  }
  else
    alert("Password must be atleast 6 character long");
}

function calculateAge(){

  let dob = document.forms["signup-form"]["dob"].value;
  var year = Number(dob.substr(0, 4));
  var month = Number(dob.substr(4, 2)) - 1;
  var day = Number(dob.substr(6, 2));
  var today = new Date();
  var age = today.getFullYear() - year;
  if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
    age--;
  }

  // alert(age + "Years");
  let ageDisp=document.getElementById("Age");
  ageDisp.value=age + " Years"
}

function validateQuizForm() {
    confirm("Are you sure");
}

d=new Date();
setInterval(()=>{
  time.innerHTML=d.toLocaleString();
  console.log(d.toLocaleString())
},1000);
