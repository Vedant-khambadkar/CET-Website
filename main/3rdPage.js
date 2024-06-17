
for (let index = 0; index <30; index++) {

    let div = document.createElement("div")
    div.innerHTML=index+1
    div.style.padding="12px 15px"
    div.setAttribute("class","que")
    document.querySelector("#queNo").append(div)
    
}