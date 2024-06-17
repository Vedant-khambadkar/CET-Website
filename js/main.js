let users = [];

if (localStorage.getItem('usersData') !== null) {
    users =[...JSON.parse(localStorage.getItem('usersData'))]
}
function createUser() {
    let createMovie = document.getElementById("addmodal")
    createMovie.style.display = "flex"

};
function UpdateUser() {
    let createMovie = document.getElementById("Updatemodal")
    createMovie.style.display = "flex"

};

function closeModel(mode) {
    document.getElementById(mode).style.display = "none";
    console.log('ok');
};

function setTabelFOrmat(arr) {

    document.getElementById("User_data").innerHTML = ""

    arr.forEach((Details, index) => {

        let body = document.getElementById("User_data")

        let tr = document.createElement("tr")

        let id = document.createElement("td")
        id.append(Details.id)
        tr.appendChild(id)

        let Stname = document.createElement("td")
        Stname.append(Details.Name)
        tr.appendChild(Stname)

        let StEmail = document.createElement("td")
        StEmail.append(Details.Email)
        tr.appendChild(StEmail)

        let phone = document.createElement("td")
        phone.append(Details.Phone)
        tr.appendChild(phone)

        let Stdate = document.createElement("td")
        Stdate.append(Details.Date)
        tr.appendChild(Stdate)

        let actions = document.createElement('td');

        actions.classList.add('icons');


        let edit = document.createElement('i');
        edit.classList.add('fa-solid');
        edit.classList.add("fa-user-pen");
        actions.appendChild(edit);
        edit.onclick = function () {
            updateModel(Details)
            UpdateUser()

        }
        let deleteuser = document.createElement('i');
        deleteuser.classList.add('fa-solid');
        deleteuser.classList.add('fa-trash-can');
        actions.appendChild(deleteuser);
        deleteuser.onclick = deleteUser.bind(this, Details.id)

        tr.appendChild(actions);
        body.appendChild(tr)
    });

}
setTabelFOrmat(users)

function GetFormData() {
    let Enroll_Id = 101;
    if (users.length !== 0) {
        Enroll_Id = users[users.length - 1].id + 1
    } else {
        Enroll_Id = 101
    }

    let UserData = {
        id: Enroll_Id,
    }
    console.log(UserData);


    UserData.Name = document.getElementById("addName").value
    UserData.Email = document.getElementById("addEmail").value
    UserData.Phone = document.getElementById("addNo").value
    UserData.Date = document.getElementById("addDate").value

    users.push(UserData)
    closeModel('addmodal')
    setTabelFOrmat(users)
    document.getElementById("addUserFormID").reset()
    localStorage.setItem('usersData', JSON.stringify(users))
    console.log(users);
    setTimeout(() => {
        alert("Data Store Successful")
    }, 500)

}

function deleteUser(id) {

    let userDatas = users.findIndex((userId, index) => {
        return userId.id === id
    })

    let sure = confirm("Are you sure detete this data")

    if (sure === true) {
        console.log('yes');
        users.splice(userDatas, 1)
        localStorage.setItem('usersData', JSON.stringify(users))
        setTabelFOrmat(users)

    }
};

function fill() {
    Name = document.getElementById("addName")
    Email = document.getElementById("addEmail")
    Phone = document.getElementById("addNo")
    Dated = document.getElementById("addDate")

    if (Name.value === "" || Email.value === ""
        || Phone.value === "" || Dated.value === ""
    ) {
        alert("Fill the form Please")

    } else {

        function GetFormData() {
            let Enroll_Id = 101;
            if (users.length !== 0) {
                Enroll_Id = users[users.length - 1].id + 1
            } else {
                Enroll_Id = 101
            }

            let UserData = {
                id: Enroll_Id,
            }
            console.log(UserData);



            UserData.Name = document.getElementById("addName").value
            UserData.Email = document.getElementById("addEmail").value
            UserData.Phone = document.getElementById("addNo").value
            UserData.Date = document.getElementById("addDate").value

            users.push(UserData)
            closeModel('addmodal')
            setTabelFOrmat(users)
            document.getElementById("addUserFormID").reset()
            localStorage.setItem('usersData', JSON.stringify(users))
            console.log(users);
            setTimeout(() => {
                alert("Data Store Successful")
            }, 500)
        }
        GetFormData()
    }
}


//update Model

function updateModel(student) {
    console.log(student);

    document.getElementById("updateName").value = student.Name
    document.getElementById("updateEmail").value = student.Email
    document.getElementById("updateNo").value = student.Phone
    document.getElementById("updateDate").value = student.Date
    document.getElementById("updateEnroll").value = student.id


}

function UpdateUserData() {
    let UserName = document.getElementById("updateName").value
    let UserEmail = document.getElementById("updateEmail").value
    let UserNO = document.getElementById("updateNo").value
    let UserDate = document.getElementById("updateDate").value
    let UserEnroll = document.getElementById("updateEnroll").value

    let studentDataObj = {
        id: Number(UserEnroll),
        Name: UserName,
        Email: UserEmail,
        Phone: UserNO,
        Date: UserDate
    }


    let indexData = users.findIndex((Student) => (
        Student.id === Number(UserEnroll)
    ))
    if (indexData !== -1) {
        users[indexData] = studentDataObj
    }

    localStorage.setItem("usersData", JSON.stringify(users))
    closeModel('Updatemodal')
    setTabelFOrmat(users)

};

















































