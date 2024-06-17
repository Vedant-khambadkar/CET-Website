let loginData;

let login=sessionStorage.getItem('loginUser')
if ( login!== null) {
    loginData =JSON.parse(login)
}
else{
    location.href="./1stPage.html"
}


// file:///C:/Users/vedan/OneDrive/Desktop/MS18%20FSW%20BATCH/Mega%20Project%20JavaScript/2ndPage.html