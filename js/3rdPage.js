let loginData;

let login = sessionStorage.getItem('loginUser')
if (login !== null) {
    loginData = JSON.parse(login)
}
else {
    location.href = "./1stPage.html"
}

function timing(){
    const minute = (time) => {
        let counter = time
        let h1 = document.getElementById("minute")
        h1.innerHTML = counter
        setInterval(() => {
            counter--
            h1.innerHTML = counter
    
            if (counter === 0) {
                clearInterval(1)
            }
        }, 60000);
    }
    
    const second = (time) => {
        let counter = time
        let h1 = document.getElementById("sec")
        let h2 = document.getElementById("minute")
        h1.innerHTML = counter + 1
        minute(60)
    
        setInterval(() => {
            h1.innerHTML = counter
            counter--
    
            if (counter == -1) {
                counter = time
                if (h2.innerHTML === h1.innerHTML) {
                    setInterval(() => {
                        counter = time
                        h1.innerHTML = counter
                        time--
    
                        if (h2.innerHTML === h1.innerHTML) {
                            time = 0
                            clearInterval(0)
    
                        }
                    }, 1000);
                }
            }
        }, 1000);
    }
    second(59)
}
timing()

document.getElementById("userName").innerText = loginData.Name
document.getElementById("userEmail").innerText = loginData.Email
document.getElementById("userEnrollment_NO").innerText = loginData.id


let QuestionData = []

function getDataFromAPI() {


    let API_KEY = "pyXogs2Hg2Cm89y6VR7e4vFEEuTz3cb42yTWsdhq"

    fetch(`https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=code&difficulty=Medium&limit=10&tags=HTML`)
        .then((res) => res.json())
        .then((response) => {
            QuestionData = response
            console.log(response);
            
            setQueData(response)
            setSingleQuestion(response[0],0)
            // console.log(response);

        })
        .catch((error) => {
            console.error(error)
        })
}
getDataFromAPI()


let ViewIndex = null;

const setQueData = (questions) => {




    if (questions.length > 0) {


        questions.forEach((que, index) => {
            
            let QueNO = document.createElement("div")
            QueNO.setAttribute("class", "que")
            QueNO.setAttribute("id", `que_${index+1}`)
            QueNO.innerText = `${index + 1}`

            if(ViewIndex === null){
                if(index ===0){
                    QueNO.style.backgroundColor="red"
                    ViewIndex = index
                }
            }

             QueNO.onclick=()=>{
                document.getElementById(`que_${ViewIndex+1}`).style.backgroundColor="transparent"
                QueNO.style.backgroundColor="red"
                ViewIndex = index
                
                setSingleQuestion(que)
             }

            document.getElementById("queNo").appendChild(QueNO)

            document.getElementById("notVisited").innerText=QuestionData.length
            document.getElementById("notAns").innerText=QuestionData.length
   
        });
    }
}


function setSingleQuestion(SingleQue){
    document.getElementById("h1").innerText= ` ${SingleQue.question}`
    document.getElementById("opt1").innerText=SingleQue.answers.answer_a
    document.getElementById("opt2").innerText=SingleQue.answers.answer_b
    document.getElementById("opt3").innerText=SingleQue.answers.answer_c
    document.getElementById("opt4").innerText=SingleQue.answers.answer_d
    
}



    function preQue(){
        if(ViewIndex !== 0){
            setSingleQuestion(QuestionData[ViewIndex -1],ViewIndex - 1)
            console.log(ViewIndex);
            document.getElementById(`que_${ViewIndex+1}`).style.backgroundColor="transparent"
            document.getElementById(`que_${ViewIndex}`).style.backgroundColor="red"
            ViewIndex =ViewIndex - 1
        }
    };
    function nextQue(){
        if(ViewIndex !== QuestionData.length -1){
            // document.getElementById("formation").reset()
            setSingleQuestion(QuestionData[ViewIndex +1],ViewIndex +1)
            console.log(ViewIndex);
            ViewIndex =ViewIndex+1
            document.getElementById(`que_${ViewIndex}`).style.backgroundColor="transparent"
            document.getElementById(`que_${ViewIndex+1}`).style.backgroundColor="red"
        }
    };
    


    function color(){
        if(ViewIndex=== ViewIndex){
            setSingleQuestion(QuestionData[ViewIndex],ViewIndex)
            document.getElementById(`que_${ViewIndex+1}`).style.backgroundColor="green"
            // document.getElementById(`que_${ViewIndex}`).style.backgroundColor="green"
            // ViewIndex= ViewIndex+1
            console.log(ViewIndex);
            
            console.log('yes');
        }
        
    
}





































































// function Reset(){
    
//     setSingleQuestion(QuestionData[0])
//     document.getElementById(`que_${ViewIndex+1}`).style.backgroundColor="transparent"
//     document.getElementById(`que_${1}`).style.backgroundColor="red"

    
  
        
//     document.getElementById(`que_${1}`).style.backgroundColor="transparent"
//     };

















































    // let dis = document.createElement("div")
    // dis.setAttribute("id", "quet")
    // let h2 = document.createElement("h4")
    // dis.appendChild(h2)
    // let id = 0;
    // let ques = questions[id].question
    // h2.append(ques)
    // document.getElementById("upper_box").appendChild(dis)
    
    //             let option = document.createElement("div")
    //             let inp = document.createElement("input")
    //             let span = document.createElement("span")
    //             let h3 = document.createElement("h3")
    //             option.append(inp)
    //             option.append(span)
    //             span.append(h3)
    //             inp.setAttribute("type", "radio")
    //             inp.setAttribute("name", "a")
    //             option.setAttribute("class", "opt1")
    //             let ans = questions[id].answers
    //         console.log(ans["answer_a"]);
            
    //             span.append(ans["answer_a"])
    //             span.append(ans["answer_b"])
    //             span.append(ans["answer_c"])
    //             span.append(ans["answer_d"])
    //             // option.innerHTML =ans
    //             document.getElementById("lower_box").appendChild(option)
    
    


// let ans=questions[0].answers
// console.log(ans["answer_a"]);
// console.log(ans["answer_b"]);
// console.log(ans["answer_c"]);
// console.log(ans["answer_d"]);
// console.log(questions[0]);

// let arr=[1,2,3,4]
// // arr[1] =3
// console.log( "array is ",arr);
// console.log(arr.indexOf(1));
// // arr.indexOf(1)
// console.log(arr.values(1));





// let option = document.createElement("div")
// let inp = document.createElement("input")
// let span = document.createElement("span")
// let h3 = document.createElement("h3")
// option.append(inp)
// option.append(span)
// span.append(h3)
// inp.setAttribute("type", "radio")
// inp.setAttribute("name", "a")
// option.setAttribute("class", "opt1")
// let ans = questions[0].answers
// console.log(ans["answer_a"]);

// span.append(ans)
// // option.innerHTML =ans
// document.getElementById("lower_box").appendChild(option)
// console.log(option);
