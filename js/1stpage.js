let users = [];

if (localStorage.getItem('usersData') !== null) {
  users = [...JSON.parse(localStorage.getItem('usersData'))]
}
console.log(users);


function Login() {
  let Enroll_Id = document.getElementById("Enroll").value
  let Password = document.getElementById("passWord").value

  if (Enroll_Id.trim() !== "" && Password.trim() !== "") {

    let data = users.find((studentId) => {
      return studentId.id === Number(Enroll_Id)
    })


    if (data !== undefined) {

      if (data.Date === Password) {
        let login = document.getElementById("a_tag")
        login.setAttribute("href", "3rdPage.html")

        sessionStorage.setItem("loginUser", JSON.stringify(data))

      } else {
        alert("Wrong Password");
      }


    } else {
      alert("Wrong Enrollment No");

    }

  }
  else {
    alert("Please Provied Enrollment No & Password")
  }
};


































// function collect(roll, pass) {
  
  
//   let user = collection.find((ele) => (ele.rollno === roll && ele.pass === `${pass}`))
  
//   if (user) {
//     document.getElementById("roll").innerText=`${roll}`
//     document.getElementById("pass").innerText=`${pass}`
//     console.log('yes');
    
//   }
//   else {
//     console.log("Something Wrong")

//   }


// }
//  collect(`${roll}`,`${pass}`)


// clicked()

// function a(roll,pass){

//   document.getElementById("pass").innerText=`${pass}`
// }
// a()
// console.log(a());
// function a(){

//   function roll(e){
//     document.getElementById("roll").innerHTML=""
    
//   }
//   console.log(roll())
//   function pass(e){
//     document.getElementById("pass").innerHTML=""
//   }
//   console.log(pass())

//   document.getElementById("roll").innerHTML=""
//   document.getElementById("pass").innerHTML=""


  
// }
// a()
